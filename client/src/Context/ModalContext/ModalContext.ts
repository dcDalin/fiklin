/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

const AuthContext = createContext({
  isLoginModalOpen: false,
  isSignUpModalOpen: false,
  openLoginModal: () => {},
  openSignUpModal: () => {},
  closeModals: () => {},
});

export default AuthContext;
