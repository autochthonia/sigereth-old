import { ApolloProvider } from 'react-apollo';
import { HttpLink, InMemoryCache } from 'apollo-boost';
import { WebSocketLink } from 'apollo-link-ws';
import React, { Component } from 'react';

import { ApolloClient } from 'apollo-client';
import { getMainDefinition } from 'apollo-utilities';
import { split } from 'apollo-link';

import Global from './layouts/Global';
import Routes from './routes';

const GRAPHQL_HTTP_ENDPOINT = 'https://api.graph.cool/simple/v1/cjfyn54118qpz0100grabp2js';
const GRAPHQL_WS_ENDPOINT = 'wss://subscriptions.us-west-2.graph.cool/v1/cjfyn54118qpz0100grabp2js';

const httpLink = new HttpLink({
  uri: GRAPHQL_HTTP_ENDPOINT,
});
const wsLink = new WebSocketLink({
  uri: GRAPHQL_WS_ENDPOINT,
  options: {
    reconnect: true,
  },
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Global>
          <Routes />
        </Global>
      </ApolloProvider>
    );
  }
}

export default App;
