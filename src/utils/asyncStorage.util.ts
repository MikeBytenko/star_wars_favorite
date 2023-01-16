import {IFavorite} from '../types/user';

export const getUpdatedFavorites = (
  favorites: IFavorite[],
  newFavorite: IFavorite,
) => {
  if (!!favorites.find(user => user.id === newFavorite.id)) {
    return favorites.filter(user => user.id !== newFavorite.id);
  }
  return [...favorites, newFavorite];
};
