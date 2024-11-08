//import { Album } from 'src/album/entities/album.entity';
import { Artist, Favorites, User, Album } from './types';

class DataBase {
  favorites: Favorites;
  artists: Artist[] = [];
  users: User[] = [];
  albums: Album[] = [];

  //   getFavoritesByID(id: string): Favorites | null {
  //     const result = this.favorites.find((item) => item.id === id);
  //     return result ?? null;
  //   }
  getUserAll(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
    //   delete user.password;
    return user;
  }

  getUserByID(id: string): User {
    const result = this.users.find((item) => item.id === id);
    //  delete result.password;
    return result ?? null;
  }

  delUserByID(id: string): User {
    const result = this.users.find((item) => item.id === id);
    if (!result) return null;
    this.users.splice(this.users.indexOf(result));
    return result;
  }

  updateUserByID(id: string, data: User): User {
    let user = this.users.find((item) => item.id === id);
    if (!user) return null;
    user = data;
    //  {...user} = {...data}
    return this.getUserByID(id);
  }

  /////////////////
  getArtistsAll(): Artist[] {
    return this.artists;
  }

  getArtistByID(id: string): Artist {
    const result = this.artists.find((item) => item.id === id);
    return result ?? null;
  }
  addArtist(artist: Artist): Artist {
    this.artists.push(artist);
    return artist;
  }
  delArtistByID(id: string): Artist {
    const result = this.artists.find((item) => item.id === id);
    if (!result) return null;
    this.artists.splice(this.artists.indexOf(result));
    return result;
  }

  updateArtistByID(id: string, data: Artist): Artist {
    let artist = this.artists.find((item) => item.id === id);
    if (!artist) return null;
    artist = data;
    //  {...user} = {...data}
    return this.getArtistByID(id);
  }
  ///////////////////////////////////
  getAlbumsAll(): Album[] {
    return this.albums;
  }

  getAlbumByID(id: string): Album {
    const result = this.albums.find((item) => item.id === id);
    return result ?? null;
  }
  addAlbum(album: Album): Album {
    this.albums.push(album);
    return album;
  }
  delAlbumByID(id: string): Album {
    const result = this.albums.find((item) => item.id === id);
    if (!result) return null;
    this.albums.splice(this.albums.indexOf(result));
    return result;
  }

  updateAlbumByID(id: string, data: Album): Album {
    let album = this.albums.find((item) => item.id === id);
    if (!album) return null;
    album = data;
    //  {...user} = {...data}
    return this.getAlbumByID(id);
  }

  //   addUser(user: User) {
  //     this.users.push(user);
  //     //   delete user.password;
  //     return user;
  //   }

  //   getUserByID(id: string): User {
  //     const result = this.users.find((item) => item.id === id);
  //     //  delete result.password;
  //     return result ?? null;
  //   }

  //   delUserByID(id: string): User {
  //     const result = this.users.find((item) => item.id === id);
  //     if (!result) return null;
  //     this.users.splice(this.users.indexOf(result));
  //     return result;
  //   }

  ///////////////////

  getFavoritesAll(): Favorites {
    // const result = this.favorites.find((item) => item.id === id);
    return this.favorites;
  }

  //   createFavorites(newFavorites: Favorites) {
  //     this.favorites.push(newFavorites);
  //   }

  //   getArtistsAll(): Artist[] {
  //     return this.artists;
  //   }
  //   getArtistByID(id: string): Artist {
  //     const result = this.artists.find((item) => item.id === id);
  //     return result ?? null;
  //   }
  //   addArtist(artist: Artist): Artist {
  //     this.artists.push(artist);
  //     return artist;
  //   }
  //   delArtistByID(id: string) {
  //     const result = this.artists.find((item) => item.id === id);
  //   }
}

export const dataBase = new DataBase();
