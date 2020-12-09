import React, { useContext } from 'react';
import ModalLayout from '../Layouts/ModalLayout';

// context
import ModalContext from '../../Context/ModalContext/ModalContext';

const SignUpModal: React.FC = () => {
  const { isSignUpModalOpen, closeModals, openSignUpModal } = useContext(ModalContext);
  return (
    <ModalLayout
      title="Create a new Fiklin account"
      open={isSignUpModalOpen}
      onClose={closeModals}
      onOpen={openSignUpModal}
    >
      <h2>hello signup</h2>
    </ModalLayout>
  );
};

export default SignUpModal;
