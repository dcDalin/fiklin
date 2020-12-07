import React from 'react';
import { createMedia } from '@artsy/fresnel';
import { Helmet } from 'react-helmet';

import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

interface Props {
  children: React.ReactNode;
  title: string;
  metaName: string;
  metaContent: string;
}

const MainLayout: React.FC<Props> = ({ children, title, metaName, metaContent }: Props) => {
  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
    },
  });
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name={metaName} content={metaContent} />
      </Helmet>
      <MediaContextProvider>
        <Media at="tablet">
          <DesktopContainer>{children}</DesktopContainer>
        </Media>
        <Media at="mobile">
          <MobileContainer>{children}</MobileContainer>
        </Media>
      </MediaContextProvider>
    </>
  );
};

export default MainLayout;
