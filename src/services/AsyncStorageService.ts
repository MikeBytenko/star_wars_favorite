import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import {IFavorite} from '../types/user';
import {getUpdatedFavorites} from '../utils/asyncStorage.util';

export enum StorageKeys {
  Favorites = 'favorites',
}

export const useGetStorageItem = (storageKey: StorageKeys) =>
  useQuery<IFavorite[] | null, Error>(storageKey, async () => {
    const result: string | null = await AsyncStorage.getItem(storageKey);
    return result ? JSON.parse(result) : [];
  });

export const useUpdateFavorites = ({removeAll}: {removeAll?: boolean}) => {
  const queryClient = useQueryClient();
  return useMutation(
    StorageKeys.Favorites,
    async (newFavorite: IFavorite | null) => {
      const result: string | null = await AsyncStorage.getItem(
        StorageKeys.Favorites,
      );

      const currentData = result ? JSON.parse(result) : [];
      const newData = removeAll
        ? []
        : newFavorite && getUpdatedFavorites(currentData, newFavorite);

      await AsyncStorage.setItem(
        StorageKeys.Favorites,
        JSON.stringify(newData),
      );

      return newData;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(StorageKeys.Favorites),
    },
  );
};
