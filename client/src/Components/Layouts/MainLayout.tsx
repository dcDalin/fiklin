import React from 'react';
import { createMedia } from '@artsy/fresnel';
import { Helmet } from 'react-helmet';

import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import { Container } from 'semantic-ui-react';

interface Props {
  children: React.ReactNode;
  title: string;
  metaName: string;
  metaContent: string;
}

const MainLayout: React.FC<Props> = ({ children, title, metaName, metaContent }: Props) => {
  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      sm: 0,
      md: 768,
      lg: 1024,
      xl: 1192,
    },
  });
  return (
    <Container>
      <Helmet>
        <title>{title}</title>
        <meta name={metaName} content={metaContent} />
      </Helmet>
      <MediaContextProvider>
        <Media greaterThanOrEqual="md">
          <DesktopContainer>{children}</DesktopContainer>
        </Media>
        <Media greaterThanOrEqual="sm">
          <MobileContainer>{children}</MobileContainer>
        </Media>
      </MediaContextProvider>
    </Container>
  );
};

export default MainLayout;
