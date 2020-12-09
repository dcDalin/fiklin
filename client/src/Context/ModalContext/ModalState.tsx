/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useReducer } from 'react';
import ModalReducer from './ModalReducer';
import ModalContext from './ModalContext';
import { OPEN_LOGIN_MODAL, OPEN_SIGNUP_MODAL, CLOSE_MODALS } from './types';

interface ModalStateProps {
  children?: React.ReactNode;
}

interface FuncResult {
  isLoginModalOpen: boolean | null;
  isSignUpModalOpen: boolean | null;
}

const ModalState: React.FC = (props: ModalStateProps) => {
  const { children } = props;

  const intialState: FuncResult = {
    isLoginModalOpen: false,
    isSignUpModalOpen: false,
  };

  const [state, dispatch] = useReducer(ModalReducer, intialState);

  const openLoginModal = (): any => dispatch({ type: OPEN_LOGIN_MODAL });
  const openSignUpModal = (): any => dispatch({ type: OPEN_SIGNUP_MODAL });
  const closeModals = (): any => dispatch({ type: CLOSE_MODALS });

  return (
    <ModalContext.Provider
      value={{
        isLoginModalOpen: state.isLoginModalOpen,
        isSignUpModalOpen: state.isSignUpModalOpen,
        openLoginModal,
        openSignUpModal,
        closeModals,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalState;
