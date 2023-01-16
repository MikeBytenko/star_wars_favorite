import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import {ReactElement} from 'react';

const URL = 'https://swapi-graphql.netlify.app/.netlify/functions/index';

interface IProps {
  children: ReactElement;
}

const publicHttpLink = new HttpLink({
  uri: URL,
});

export let publicClient: ApolloClient<NormalizedCacheObject>;

const Apollo = ({children}: IProps) => {
  publicClient = new ApolloClient({
    link: ApolloLink.from([publicHttpLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={publicClient}>{children}</ApolloProvider>;
};

export default Apollo;
