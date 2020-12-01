export type Maybe<T> = T | null;

export type MyMutationOutput = {
  token: string;
  message: string;
};

export type SignUpUserOutput = {
  status: string;
  token?: Maybe<string>;
  data?: Maybe<string>;
};

export type AuthEmailExistsOutput = {
  message: string;
  data: boolean;
};

export type LoginOutput = {
  data?: Maybe<string>;
  status: string;
  token?: Maybe<string>;
};

export type Query = {
  AuthEmailExists?: Maybe<AuthEmailExistsOutput>;
};

export type Mutation = {
  AuthLoginUser?: Maybe<LoginOutput>;
  AuthSignUpUser?: Maybe<SignUpUserOutput>;
};

export type AuthEmailExistsArgs = {
  _eq?: Maybe<string>;
};

export type AuthLoginUserArgs = {
  email: string;
  password: string;
};

export type AuthSignUpUserArgs = {
  email: string;
  password: string;
  user_name: string;
};
