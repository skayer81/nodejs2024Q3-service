import { UUID } from 'crypto';

export interface Favorites {
  //id: string;
  artists: Artist[]; // UUID[]; // favorite artists ids
  albums: Album[]; //UUID[]; // favorite albums ids
  tracks: Track[]; // UUID[]; // favorite tracks ids
}

export interface FavoritesSets {
  //id: string;
  artists: Set<UUID>; // UUID[]; // favorite artists ids
  albums: Set<UUID>; //UUID[]; // favorite albums ids
  tracks: Set<UUID>; // UUID[]; // favorite tracks ids
}

export interface Artist {
  id: string; // uuid v4
  name: string;
  grammy: boolean;
}

export interface Track {
  id: string; // uuid v4
  name: string;
  artistId: string | null; // refers to Artist
  albumId: string | null; // refers to Album
  duration: number; // integer number
}
// Album (with attributes):

export interface Album {
  id: string; // uuid v4
  name: string;
  year: number;
  artistId: string | null; // refers to Artist
}

export interface User {
  id: string; // uuid v4
  login: string;
  password: string;
  version: number; // integer number, increments on update
  createdAt: number; // timestamp of creation
  updatedAt: number; // timestamp of last update
}
