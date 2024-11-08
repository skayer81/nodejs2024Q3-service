//import { Album } from 'src/album/entities/album.entity';
import { Artist, Favorites, User, Album, Track } from './types';

class DataBase {
  favorites: Favorites;
  artists: Artist[] = [];
  users: User[] = [];
  albums: Album[] = [];
  tracks: Track[] = [];

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
    const artistId = result.id;
    this.artists.splice(this.artists.indexOf(result));
    this.tracks.forEach(
      (item) =>
        (item.artistId = item.artistId === artistId ? null : item.artistId),
    );
    this.albums.forEach(
      (item) =>
        (item.artistId = item.artistId === artistId ? null : item.artistId),
    );
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
    const albumID = result.id;
    this.albums.splice(this.albums.indexOf(result));
    this.tracks.forEach(
      (item) => (item.albumId = item.albumId === albumID ? null : item.albumId),
    );
    return result;
  }

  updateAlbumByID(id: string, data: Album): Album {
    let album = this.albums.find((item) => item.id === id);
    if (!album) return null;
    album = data;
    //  {...user} = {...data}
    return this.getAlbumByID(id);
  }

  //////////////////////////////////////////

  getTracksAll(): Track[] {
    return this.tracks;
  }

  getTrackByID(id: string): Track {
    const result = this.tracks.find((item) => item.id === id);
    return result ?? null;
  }
  addTrack(track: Track): Track {
    this.tracks.push(track);
    return track;
  }
  delTrackByID(id: string): Track {
    const result = this.tracks.find((item) => item.id === id);
    if (!result) return null;
    this.tracks.splice(this.tracks.indexOf(result));
    return result;
  }

  updateTrackByID(id: string, data: Track): Track {
    let track = this.tracks.find((item) => item.id === id);
    if (!track) return null;
    track = data;
    //  {...user} = {...data}
    return this.getTrackByID(id);
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
