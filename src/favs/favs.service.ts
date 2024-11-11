import {
  BadRequestException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateFavDto } from './dto/create-fav.dto';
import { UpdateFavDto } from './dto/update-fav.dto';
import { dataBase } from 'src/dataBase/dataBase';
import { UUID } from 'crypto';

@Injectable()
export class FavsService {
  create(id: UUID, type: string) {
    const addTypes = {
      album: dataBase.favoritesAddAlbum,
      track: dataBase.favoritesAddTrack,
      artist: dataBase.favoritesAddArtist,
    };
    const result = addTypes[type].call(dataBase, id);
    if (!result)
      throw new UnprocessableEntityException(`${type} whit id ${id} not found`);
    return result;
  }

  findAll() {
    const result = dataBase.getFavoritesAll();
    return result;
  }

  remove(id: UUID, type: string) {
    const delTypes = {
      album: dataBase.favoritesDelAlbum,
      track: dataBase.favoritesDelTrack,
      artist: dataBase.favoritesDelArtist,
    };
    try {
      const result = delTypes[type].call(dataBase, id);
      return result;
    } catch (error) {
      throw new Error(type);
    }
  }
}
