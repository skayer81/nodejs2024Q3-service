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
    //return 'This action adds a new fav';
    const addTypes = {
      album: dataBase.favoritesAddAlbum,
      track: dataBase.favoritesAddTrack,
      artist: dataBase.favoritesAddArtist,
    };
    const result = addTypes[type].call(dataBase, id); //  (id);
    if (!result)
      throw new UnprocessableEntityException(`${type} whit id ${id} not found`);
    return result;
  }

  findAll() {
    const result = dataBase.getFavoritesAll();
    console.log('result', result);
    return result;
    // return {
    //   albums: [],
    //   artists: [],
    //   tracks: [],
    // };
    // return `This action returns all fajjjjjvs`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} fav`;
  // }

  // update(id: number, updateFavDto: UpdateFavDto) {
  //   return `This action updates a #${id} fav`;
  // }

  remove(id: UUID, type: string) {
    const delTypes = {
      album: dataBase.favoritesDelAlbum,
      track: dataBase.favoritesDelTrack,
      artist: dataBase.favoritesDelArtist,
    };
    try {
      const result = delTypes[type].call(dataBase, id); //(id);
      return result;
    } catch (error) {
      throw new Error(type);
    }

    //  return `This action removes a #${id} fav`;
  }
}

// @Delete('/album/:id')
// deleteAlbumFav(@Param('id') id: UUID, @Body() createFavDto: CreateFavDto) {
//   return this.favsService.remove(id, 'album');
// }
// @Delete('/track/:id')
// deleteTrackFav(@Param('id') id: UUID, @Body() createFavDto: CreateFavDto) {
//   return this.favsService.remove(id, 'trakc');
// }
// @Delete('/artist/:id')
