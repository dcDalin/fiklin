/* eslint-disable @typescript-eslint/no-explicit-any */
import { OPEN_LOGIN_MODAL, OPEN_SIGNUP_MODAL, CLOSE_MODALS } from './types';

interface State {
  isLoginModalOpen: boolean;
  isSignUpModalOpen: boolean;
}

const authReducer = (state: State, { type }: { type: string }): any => {
  switch (type) {
    case OPEN_LOGIN_MODAL:
      return {
        ...state,
        isLoginModalOpen: true,
        isSignUpModalOpen: false,
      };
    case OPEN_SIGNUP_MODAL:
      return {
        ...state,
        isLoginModalOpen: false,
        isSignUpModalOpen: true,
      };

    case CLOSE_MODALS:
      return {
        ...state,
        isLoginModalOpen: false,
        isSignUpModalOpen: false,
      };
    default:
      return state;
  }
};

export default authReducer;
