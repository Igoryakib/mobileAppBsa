import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { getData } from './redux/auth/auth-actions';

import RootNavigation from './components/Navigation/Navigation';
const httpLink = createHttpLink({
  uri: 'http://marketplace-graphql.azurewebsites.net/graphql',
});
const authLink = setContext(async (_, {headers}) => {
  const token = await getData();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </ApolloProvider>
  );
};

export default App ;
