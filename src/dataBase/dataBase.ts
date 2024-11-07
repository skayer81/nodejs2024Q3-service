import { Favorites } from './types';

export class DataBase {
  favorites: Favorites[];

  getFavoritesByID(id: string): Favorites | null {
    const result = this.favorites.find((item) => item.id === id);
    return result ?? null;
  }
  getFavoritesAll(): Favorites[] {
    // const result = this.favorites.find((item) => item.id === id);
    return this.favorites;
  }

  createFavorites(newFavorites: Favorites) {
    this.favorites.push(newFavorites);
  }
}
