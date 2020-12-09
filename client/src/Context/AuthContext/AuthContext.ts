/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

const AuthContext = createContext({
  token: null,
  isAuthenticated: false,
  isVerified: true,
  loading: true,
  user: null,
  error: null,
  signUpWithGoogle: () => {},
  loadUser: () => {},
  logOut: () => {},
});

export default AuthContext;
