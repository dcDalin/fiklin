import { Request, Response } from 'express';
import nodeFetch from 'node-fetch';
import bcryptjs from 'bcryptjs';

import env from '../../env';
import { createuserJwtToken } from '../../utils/jwt.token';
import loginValidate from './login.validate';
import { AuthLoginUserArgs, AuthEmailExistsArgs } from './types';

// env
const HASURA_API_ENDPOINT = env('HASURA_API_ENDPOINT');

const HASURA_OPERATION = `query AuthEmailExists($_eq: String = "") {
  users(where: {email: {_eq: $_eq}}) {
    id
    password
    email
    user_name
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
const loginAction = async (req: Request, res: Response) => {
  try {
    // get request input
    const { email, password }: AuthLoginUserArgs = req.body.input;

    // Validate user input
    const { valid, err } = loginValidate(email, password);

    // check if user input is valid
    if (!valid) {
      return res.json({ status: 'error', token: null, data: err });
    }

    // check email exists
    const findUser = await execute({ _eq: email });

    // if user email does not exist
    if (findUser.data.users.length === 0) {
      return res.json({
        status: 'error',
        token: null,
        data: 'Invalid email and or password',
      });
    }

    // user exists in db
    const foundUser = findUser.data.users[0];

    const match = await bcryptjs.compare(password, foundUser.password);

    // passwords don't match
    if (!match) {
      return res.json({
        status: 'error',
        token: null,
        data: 'Invalid email and or password',
      });
    }

    const token = createuserJwtToken(foundUser.id.toString());

    return res.json({
      token,
      status: 'success',
      data: {
        id: foundUser.id,
        email: foundUser.email,
        user_name: foundUser.user_name,
      },
    });
  } catch (err) {
    return res.status(400).json({ message: 'Something went wrong', data: err });
  }
};

export default loginAction;
