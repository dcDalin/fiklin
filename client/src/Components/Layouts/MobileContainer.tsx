import React from 'react';
import './layout.css';

import TopMenu from '../Navigation/TopMenu';

interface Props {
  children: React.ReactNode;
}

const MobileContainer: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <TopMenu size="mini" />
      {children}
      <div className="footer">
        <p>
          Copyright &copy; <script>document.write(new Date().getFullYear())</script> Fiklin Tickets All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default MobileContainer;
