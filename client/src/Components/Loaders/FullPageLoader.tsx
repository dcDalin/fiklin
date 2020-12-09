import React from 'react';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

const FullPageLoader: React.FC = () => (
  <Segment style={{ width: '100%', height: '100vh', border: '0px', boxShadow: 'none' }}>
    <Dimmer active inverted>
      <Loader active inline="centered" size="massive"></Loader>
    </Dimmer>
  </Segment>
);

export default FullPageLoader;
