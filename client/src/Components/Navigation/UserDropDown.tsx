import React, { useContext } from 'react';
import { Dropdown } from 'semantic-ui-react';

// context
import AuthContext from '../../Context/AuthContext/AuthContext';
import HasuraUserContext from '../../Context/HasuraUserContext/HasuraUserContext';

const UserDropDown: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { logOut }: any = useContext(AuthContext);
  const { profile, profileLoading }: any = useContext(HasuraUserContext);

  return (
    <Dropdown text={profileLoading ? '' : profile.display_name} lazyLoad={true} loading={profileLoading}>
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
