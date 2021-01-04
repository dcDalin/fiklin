import { Request, Response } from 'express';
import nodeFetch from 'node-fetch';

import env from '../../env';
import { AuthOnCreateArgs } from './types';

// env
const HASURA_API_ENDPOINT = env('HASURA_API_ENDPOINT');

const HASURA_OPERATION = `mutation AuthOnCreate($display_name: String = "", $email: String = "", $id: String = "", $phone_number: String = "", $profile_url: String = "") {
  insert_users_one(object: {display_name: $display_name, id: $id, profile_url: $profile_url, phone_number: $phone_number, email: $email}) {
    display_name
  }
}`;

const execute = async (variables: AuthOnCreateArgs) => {
  const fetchResponse = await nodeFetch(HASURA_API_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({
      variables,
      query: HASURA_OPERATION,
    }),
  });
  const data = await fetchResponse.json();

  return data;
};

// Request Handler
const onCreateAction = async (req: Request, res: Response) => {
  try {
    // get request input
    const {
      id,
      display_name,
      email,
      phone_number,
      profile_url,
    }: AuthOnCreateArgs = req.body.input;

    // execute the parent operation in Hasura
    const { data, errors } = await execute({
      id,
      display_name,
      email,
      phone_number,
      profile_url,
    });

    if (errors) return res.status(400).json(errors[0]);

    return res.json({
      display_name: data.insert_users_one.display_name,
    });
  } catch (err) {
    return res.status(400).json({ status: false, data: err });
  }
};

export default onCreateAction;
