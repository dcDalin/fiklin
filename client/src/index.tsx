import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import AuthState from './Context/AuthContext/AuthState';
import App from './App';
import client from './ApolloProvider';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </AuthState>
  </React.StrictMode>,
  document.getElementById('root'),
);
