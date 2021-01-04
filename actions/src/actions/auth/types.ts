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

export type AnonymousLoginOutput = {
  data?: Maybe<string>;
  status: string;
  token?: Maybe<string>;
};

export type AnonymousTokenOutput = {
  token: string;
  data?: Maybe<string>;
};

export type MyQueryOutput = {
  status?: Maybe<string>;
  data: boolean;
  message: string;
};

export type AuthOnCreateOutput = {
  success: boolean;
};

export type Query = {
  AuthEmailExists?: Maybe<AuthEmailExistsOutput>;
  AuthVerifyToken?: Maybe<MyQueryOutput>;
};

export type Mutation = {
  AuthLoginUser?: Maybe<LoginOutput>;
  AuthOnCreate?: Maybe<AuthOnCreateOutput>;
  AuthSignUpUser?: Maybe<SignUpUserOutput>;
};

export type AuthEmailExistsArgs = {
  _eq?: Maybe<string>;
};

export type AuthVerifyTokenArgs = {
  _eq?: Maybe<string>;
};

export type AuthLoginUserArgs = {
  email?: Maybe<string>;
  password?: Maybe<string>;
};

export type AuthOnCreateArgs = {
  display_name?: Maybe<string>;
  email?: Maybe<string>;
  id?: Maybe<string>;
  phone_number?: Maybe<string>;
  profile_url?: Maybe<string>;
};

export type AuthSignUpUserArgs = {
  email?: Maybe<string>;
  password?: Maybe<string>;
  user_name?: Maybe<string>;
};
