import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';

// Context
import AuthState from './Context/AuthContext/AuthState';
import ModalState from './Context/ModalContext/ModalState';

import App from './App';
import client from './ApolloProvider';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <ApolloProvider client={client}>
        <ModalState>
          <App />
        </ModalState>
      </ApolloProvider>
    </AuthState>
  </React.StrictMode>,
  document.getElementById('root'),
);
