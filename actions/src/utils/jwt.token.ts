import * as jwt from 'jsonwebtoken';

import env from '../env';

// env
const JWT_SECRET = env('JWT_SECRET');
const WEBSITE_URL = env('WEBSITE_URL');

const user = 'user';
const publisher = 'publisher';
const admin = 'admin';

const createJwtToken = (body: any) => jwt.sign(body, JWT_SECRET);

export const createuserJwtToken = (userId: string) =>
  createJwtToken({
    sub: userId,
    name: userId,
    iat: Date.now() / 1000,
    iss: WEBSITE_URL,
    'https://hasura.io/jwt/claims': {
      'x-hasura-allowed-roles': [user],
      'x-hasura-default-role': user,
      'x-hasura-user-id': userId,
      'x-hasura-role': user,
    },
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
  });

export const createPublisherToken = (publisherId: string) =>
  createJwtToken({
    sub: publisherId,
    name: publisherId,
    iat: Date.now() / 1000,
    iss: WEBSITE_URL,
    'https://hasura.io/jwt/claims': {
      'x-hasura-allowed-roles': [publisher],
      'x-hasura-default-role': publisher,
      'x-hasura-user-id': publisherId,
      'x-hasura-role': publisher,
    },
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
  });

export const createAdminJwtToken = (adminId: string) =>
  createJwtToken({
    sub: adminId,
    name: adminId,
    iat: Date.now() / 1000,
    iss: WEBSITE_URL,
    'https://hasura.io/jwt/claims': {
      'x-hasura-allowed-roles': [admin],
      'x-hasura-default-role': admin,
      'x-hasura-user-id': adminId,
      'x-hasura-role': admin,
    },
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
  });
