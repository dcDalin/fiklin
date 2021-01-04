import { ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client';
import { setContext } from '@apollo/link-context';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/link-ws';

import { jwtTitle } from '../constants';

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(jwtTitle);

  // return the headers to the context so uploadLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = new HttpLink({ uri: process.env.REACT_APP_FIKLIN_URL });

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_FIKLIN_SUBSCRIPTION_URL || '',
  options: { reconnect: true },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  authLink.concat(httpLink),
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});

export default client;
