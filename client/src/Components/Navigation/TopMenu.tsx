import React, { useContext } from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import firebase, { googleProvider } from '../../firebase.config';
import AuthContext from '../../Context/AuthContext/AuthContext';

// paths
import { HOME, TICKET_RESALE } from '../../routes/paths';

type Size = 'small' | 'huge' | 'tiny' | 'mini' | 'large' | 'massive' | undefined;

interface Props {
  size: Size;
}

const DesktopMenu: React.FC<Props> = ({ size }: Props) => {
  const { logOut, isAuthenticated } = useContext(AuthContext);

  const signInWithGoogle = async (): Promise<void> => {
    try {
      const res = await firebase.auth().signInWithPopup(googleProvider);
      console.log('Res is: ', res);
    } catch (err) {
      console.log('Err signing in with google', err);
    }
  };

  return (
    <Menu secondary size={size}>
      <Menu.Item name="Fiklin" as={Link} to={HOME} />
      <Menu.Menu position="right">
        <Menu.Item name="Ticket Resale" as={Link} to={TICKET_RESALE} />
        <Menu.Item>
          {isAuthenticated ? (
            <Button size={size} onClick={logOut}>
              Log Out
            </Button>
          ) : (
            <Button size={size} onClick={signInWithGoogle}>
              Login or Create Account
            </Button>
          )}
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default DesktopMenu;
