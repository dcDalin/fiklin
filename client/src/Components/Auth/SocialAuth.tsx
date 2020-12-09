import React, { useContext } from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';

// context
import AuthContext from '../../Context/AuthContext/AuthContext';

const SocialAuth: React.FC = () => {
  const { signUpWithGoogle } = useContext(AuthContext);

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={8}>
          <Button color="facebook" fluid>
            <Icon name="facebook" /> Facebook
          </Button>
        </Grid.Column>
        <Grid.Column width={8}>
          <Button color="google plus" fluid onClick={signUpWithGoogle}>
            <Icon name="google" /> Google Plus
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default SocialAuth;
