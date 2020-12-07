import React from 'react';

import TopMenu from '../Navigation/TopMenu';

interface Props {
  children: React.ReactNode;
}

const DesktopContainer: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <TopMenu size="massive" />
      {children}
      <h2>Footer</h2>
    </>
  );
};

export default DesktopContainer;
