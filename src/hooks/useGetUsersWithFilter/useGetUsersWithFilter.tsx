import {useQuery} from '@apollo/client';
import {GetUsersWithFilter} from '../../graphql/queries/users';
import {IGetAllUsers, IGetUserVariables} from '../../types/user';

export const useGetUsersWithFilter = (variables: IGetUserVariables) => {
  const {data, loading, error, refetch} = useQuery<IGetAllUsers>(
    GetUsersWithFilter,
    {
      variables: variables,
      fetchPolicy: 'network-only',
    },
  );

  return {data, loading, error, refetch};
};
