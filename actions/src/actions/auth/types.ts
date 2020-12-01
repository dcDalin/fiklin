export type Maybe<T> = T | null;

export type MyMutationOutput = {
  token: string;
  message: string;
};

export type Mutation = {
  SignUpUser?: Maybe<MyMutationOutput>;
};

export type SignUpUserOutput = {
  token: string;
  message: string;
};

export type AuthEmailExistsOutput = {
  email: string;
};

export type Query = {
  AuthEmailExists?: Maybe<AuthEmailExistsOutput>;
};

export type AuthEmailExistsArgs = {
  _eq?: Maybe<string>;
};

export type SignUpUserArgs = {
  email: string;
  password: string;
  user_name: string;
};
