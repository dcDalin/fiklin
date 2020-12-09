import React, { useContext } from 'react';
import { Dropdown } from 'semantic-ui-react';

// context
import AuthContext from '../../Context/AuthContext/AuthContext';

const UserDropDown: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { logOut, user }: any = useContext(AuthContext);

  const { displayName } = user;

  return (
    <Dropdown text={displayName} lazyLoad={true}>
      <Dropdown.Menu>
        <Dropdown.Item text="Profile" />
        <Dropdown.Item text="My Tours" />
        <Dropdown.Divider />
        <Dropdown.Item text="Account Settings" />
        <Dropdown.Item text="Log Out" onClick={logOut} />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserDropDown;
