/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

const AuthContext = createContext({
  profile: null,
  profileLoading: true,
  error: null,
  fetchProfile: () => {},
});

export default AuthContext;
