import { Request, Response } from 'express';
import nodeFetch from 'node-fetch';

import env from '../../env';
import { AuthEmailExistsArgs } from './types';

// env
const HASURA_API_ENDPOINT = env('HASURA_API_ENDPOINT');

const HASURA_OPERATION = `query AuthEmailExists($_eq: String = "") {
  users(where: {email: {_eq: $_eq}}) {
    email
  }
}`;

const execute = async (variables: AuthEmailExistsArgs) => {
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
const emailExistsAction = async (req: Request, res: Response) => {
  // get request input
  const params: AuthEmailExistsArgs = req.body.input;
  // execute the parent operation in Hasura
  const { data, errors } = await execute(params);
  if (errors) return res.status(400).json(errors[0]);
  // run some business logic

  // success
  return res.json({
    message: `Email ${data.users[0].email} exists`,
    data: true,
  });
};

export default emailExistsAction;
