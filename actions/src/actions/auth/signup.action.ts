import { Request, Response } from 'express';
import nodeFetch from 'node-fetch';
import bcryptjs from 'bcryptjs';

import env from '../../env';
import { createuserJwtToken } from '../../utils/jwt.token';
import signupValidate from './signup.validate';
import { SignUpUserArgs } from './types';

// env
const HASURA_API_ENDPOINT = env('HASURA_API_ENDPOINT');
const HASURA_GRAPHQL_ADMIN_SECRET = env('HASURA_GRAPHQL_ADMIN_SECRET');

const HASURA_OPERATION = `mutation AuthSignUpUser($email: String = "", $password: String = "", $user_name: String = "") {
  insert_users_one(object: {email: $email, password: $password, user_name: $user_name}) {
    id
    user_name
    email
  }
}`;

const execute = async (variables: SignUpUserArgs) => {
  const fetchResponse = await nodeFetch(HASURA_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'X-Hasura-Admin-Secret': HASURA_GRAPHQL_ADMIN_SECRET,
    },
    body: JSON.stringify({
      variables,
      query: HASURA_OPERATION,
    }),
  });
  const data = await fetchResponse.json();

  return data;
};

// Request Handler
const signupAction = async (req: Request, res: Response) => {
  try {
    // get request input
    const { user_name, email, password }: SignUpUserArgs = req.body.input;

    // Validate user input
    const { valid, err } = signupValidate(user_name, email, password);

    // check if user input is valid
    if (!valid) {
      return res.json({ status: 'error', token: null, data: err });
    }

    // hash password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // execute the parent operation in Hasura
    const { data, errors } = await execute({
      user_name,
      email,
      password: hashedPassword,
    });

    if (errors) return res.status(400).json(errors[0]);

    const token = createuserJwtToken(data.insert_users_one.id.toString());

    return res.json({
      token,
      status: 'success',
      data: { ...data.insert_users_one },
    });
  } catch (err) {
    return res.status(400).json({ message: 'Something went wrong', data: err });
  }
};

export default signupAction;
