import React from 'react';

interface Props {
  children: React.ReactNode;
}

const MobileContainer: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <h2>Mobile header</h2>
      {children}
      <h2>mobile footer</h2>
    </>
  );
};

export default MobileContainer;
