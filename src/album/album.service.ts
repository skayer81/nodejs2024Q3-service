import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { randomUUID, UUID } from 'crypto';
import { dataBase } from 'src/dataBase/dataBase';

@Injectable()
export class AlbumService {
  create(createAlbumDto: CreateAlbumDto) {
    const album = {
      ...createAlbumDto,
      id: randomUUID(),
    };
    const createAlbum = dataBase.addAlbum(album);
    return createAlbum;
  }

  findAll() {
    return dataBase.getAlbumsAll();
    // return `This action returns all album`;
  }

  findOne(id: UUID) {
    return dataBase.getAlbumByID(id);
    // return `This action returns a #${id} album`;
  }

  update(id: UUID, updateAlbumDto: UpdateAlbumDto) {
    const album = dataBase.getAlbumByID(id);
    if (!album) throw new NotFoundException(`Album with id ${id} not found`);
    album.name = updateAlbumDto.name;
    album.year = updateAlbumDto.year;
    album.artistId = updateAlbumDto.artistId;
    // album = { ...updateAlbumDto };
    // const updatedAlbum = { ...album, ...updateAlbumDto };
    const outputAlbum = dataBase.updateAlbumByID(id, album);
    return outputAlbum;
    //  return `This action updates a #${id} album`;
  }

  remove(id: UUID) {
    return dataBase.delAlbumByID(id);
  }
}
