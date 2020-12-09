import React from 'react';
import { Header, Modal } from 'semantic-ui-react';

interface Props {
  open: boolean;
  children: React.ReactNode;
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
  title: string;
  icon?: string;
  size?: 'small' | 'mini' | 'tiny' | 'large' | 'fullscreen' | undefined;
}

const ModalLayout: React.FC<Props> = ({ open, children, onClose, onOpen, title, icon, size = 'small' }: Props) => {
  return (
    <Modal
      closeIcon
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      closeOnEscape={false}
      closeOnDimmerClick={false}
      size={size}
    >
      <Header icon={icon} content={title} />
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
};

export default ModalLayout;
