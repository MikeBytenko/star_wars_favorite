import {useQuery} from '@apollo/client';
import {GetAllUsers} from '../../graphql/queries/users';
import {IGetAllUsers, IGetUserVariables} from '../../types/user';

export const useGetUsers = (variables: IGetUserVariables) => {
  const {data, loading, error, refetch} = useQuery<IGetAllUsers>(GetAllUsers, {
    context: {
      urlKey: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    },
    variables: variables,
    fetchPolicy: 'network-only',
  });

  return {data, loading, error, refetch};
};
