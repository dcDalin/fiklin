import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const AuthLoginForm: React.FC = () => {
  return (
    <Form>
      <Form.Field>
        <label>Email</label>
        <input type="email" name="email" />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input type="password" name="password" />
      </Form.Field>
      <Button type="submit">Log in</Button>
    </Form>
  );
};

export default AuthLoginForm;
