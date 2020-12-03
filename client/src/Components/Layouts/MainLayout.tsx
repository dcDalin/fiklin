import React from 'react';
import { createMedia } from '@artsy/fresnel';

import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }: Props) => {
  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024,
    },
  });
  return (
    <MediaContextProvider>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </MediaContextProvider>
  );
};

export default MainLayout;
