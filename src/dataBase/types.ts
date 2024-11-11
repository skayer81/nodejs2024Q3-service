import { UUID } from 'crypto';

export interface Favorites {
  artists: Artist[];
  albums: Album[];
  tracks: Track[];
}

export interface FavoritesSets {
  artists: Set<UUID>;
  albums: Set<UUID>;
  tracks: Set<UUID>;
}

export interface Artist {
  id: string;
  name: string;
  grammy: boolean;
}

export interface Track {
  id: string;
  name: string;
  artistId: string | null;
  albumId: string | null;
  duration: number;
}

export interface Album {
  id: string;
  name: string;
  year: number;
  artistId: string | null;
}

export interface User {
  id: string;
  login: string;
  password: string;
  version: number;
  createdAt: number;
  updatedAt: number;
}

export enum FavoritesTypes {
  artist = 'artist',
  album = 'album',
  track = 'track',
}
