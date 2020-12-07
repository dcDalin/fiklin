import React from 'react';

import TopMenu from '../Navigation/TopMenu';

interface Props {
  children: React.ReactNode;
}

const MobileContainer: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <TopMenu size="mini" />
      {children}
      <h2>mobile footer</h2>
    </>
  );
};

export default MobileContainer;
