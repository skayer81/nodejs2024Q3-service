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
      id: randomUUID(), // randomUUID(),
    };
    const createArtist = dataBase.addArtist(artist);
    return createArtist;
    // return ;
  }

  findAll() {
    return dataBase.getArtistsAll();
    //return `This action returns all artist`;
  }

  findOne(id: UUID) {
    return dataBase.getArtistByID(id);
    // return `This action returns a #${id} artist`;
  }

  update(id: UUID, updateArtistDto: UpdateArtistDto) {
    // return `This action updates a #${id} artist`;
    const artist = dataBase.getArtistByID(id);
    if (!artist) throw new NotFoundException(`Artist with id ${id} not found`);
    // if (user.password !== updateUserDto.oldPassword) {
    //   // console.log(user, updateUserDto);
    //   throw new ForbiddenException();
    // }
    artist.name = updateArtistDto.name; //new Date().getTime();
    // user.version += 1;
    artist.grammy = updateArtistDto.grammy; // updateUserDto.newPassword;

    const outputArtist = dataBase.updateArtistByID(id, artist);
    //delete user.password;
    return outputArtist;
  }

  remove(id: UUID) {
    return dataBase.delArtistByID(id);
    // return `This action removes a #${id} artist`;
  }
}
