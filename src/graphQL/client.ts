import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import {onError} from '@apollo/client/link/error';

const url = 'http://localhost:9002/graphql';

const cache = new InMemoryCache({
  addTypename: false,
});

const httpLink = new HttpLink({
  uri: url,
});

onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({message, locations, path}) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

export const client = new ApolloClient({
  cache,
  link: httpLink,
  defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
});
