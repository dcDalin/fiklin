import React, { useContext } from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// context
import AuthContext from '../../Context/AuthContext/AuthContext';
import ModalContext from '../../Context/ModalContext/ModalContext';

// paths
import { HOME, TICKET_RESALE } from '../../routes/paths';
import UserDropDown from './UserDropDown';

type Size = 'small' | 'huge' | 'tiny' | 'mini' | 'large' | 'massive' | undefined;

interface Props {
  size: Size;
}

const DesktopMenu: React.FC<Props> = ({ size }: Props) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { openLoginModal } = useContext(ModalContext);

  return (
    <Menu secondary size={size}>
      <Menu.Item name="Fiklin" as={Link} to={HOME} />
      <Menu.Menu position="right">
        <Menu.Item name="Ticket Resale" as={Link} to={TICKET_RESALE} />
        <Menu.Item>
          {isAuthenticated ? (
            <UserDropDown />
          ) : (
            <Button size={size} onClick={openLoginModal}>
              Login or Create Account
            </Button>
          )}
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default DesktopMenu;
