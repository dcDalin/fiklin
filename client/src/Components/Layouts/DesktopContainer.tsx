import React from 'react';

interface Props {
  children: React.ReactNode;
}

const DesktopContainer: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <h2>Nav</h2>
      {children}
      <h2>Footer</h2>
    </>
  );
};

export default DesktopContainer;
