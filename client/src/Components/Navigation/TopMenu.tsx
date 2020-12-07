import React from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// paths
import { HOME, TICKET_RESALE } from '../../routes/paths';

type Size = 'small' | 'huge' | 'tiny' | 'mini' | 'large' | 'massive' | undefined;

interface Props {
  size: Size;
}

const DesktopMenu: React.FC<Props> = ({ size }: Props) => {
  return (
    <Menu secondary size={size}>
      <Menu.Item name="Fiklin" as={Link} to={HOME} />
      <Menu.Menu position="right">
        <Menu.Item name="Ticket Resale" as={Link} to={TICKET_RESALE} />
        <Menu.Item>
          <Button size={size}>Login or Create Account </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default DesktopMenu;
