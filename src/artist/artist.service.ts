import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { dataBase } from 'src/dataBase/dataBase';
import { randomUUID, UUID } from 'crypto';

@Injectable()
export class ArtistService {
  create(createArtistDto: CreateArtistDto) {
    const artist = {
      ...createArtistDto,
      id: randomUUID(),
    };
    const createArtist = dataBase.addArtist(artist);
    return createArtist;
  }

  findAll() {
    return dataBase.getArtistsAll();
  }

  findOne(id: UUID) {
    return dataBase.getArtistByID(id);
  }

  update(id: UUID, updateArtistDto: UpdateArtistDto) {
    const artist = dataBase.getArtistByID(id);
    if (!artist) throw new NotFoundException(`Artist with id ${id} not found`);
    artist.name = updateArtistDto.name;
    artist.grammy = updateArtistDto.grammy;

    const outputArtist = dataBase.updateArtistByID(id, artist);

    return outputArtist;
  }

  remove(id: UUID) {
    return dataBase.delArtistByID(id);
  }
}
