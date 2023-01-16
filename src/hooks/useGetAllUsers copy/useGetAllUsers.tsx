import {useQuery} from '@apollo/client';
import {GetAllUsers} from '../../graphql/queries/users';
import {IGetAllUsers} from '../../types/user';

export const useGetAllUsers = () => {
  const {data, loading, error, refetch} = useQuery<IGetAllUsers>(GetAllUsers, {
    context: {
      urlKey: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    },
    fetchPolicy: 'network-only',
  });

  return {data, loading, error, refetch};
};
