import {ApolloProvider} from '@apollo/client';
import React from 'react';
import {client} from './src/graphQL/client';
import TransactionHistroy from './src/screens/TransactionHistory';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <TransactionHistroy />
    </ApolloProvider>
  );
};

export default App;
