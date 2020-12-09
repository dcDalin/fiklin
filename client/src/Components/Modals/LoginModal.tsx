import React, { useContext } from 'react';
import { Divider } from 'semantic-ui-react';

// context
import ModalContext from '../../Context/ModalContext/ModalContext';

// components
import AuthLoginForm from '../Forms/AuthLoginForm';
import SocialAuth from '../Auth/SocialAuth';
import ModalLayout from '../Layouts/ModalLayout';

const LoginModal: React.FC = () => {
  const { isLoginModalOpen, closeModals, openLoginModal } = useContext(ModalContext);
  return (
    <ModalLayout title="Login to your account" open={isLoginModalOpen} onClose={closeModals} onOpen={openLoginModal}>
      <AuthLoginForm />
      <Divider horizontal>Or</Divider>
      <SocialAuth />
    </ModalLayout>
  );
};

export default LoginModal;
