import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { dataBase } from 'src/dataBase/dataBase';
import { randomUUID, UUID } from 'crypto';

@Injectable()
export class TrackService {
  create(createTrackDto: CreateTrackDto) {
    const track = {
      ...createTrackDto,
      id: randomUUID(), // randomUUID(),
    };
    const createTrack = dataBase.addTrack(track);
    return createTrack;
    // return 'This action adds a new track';
  }

  findAll() {
    return dataBase.getTracksAll();
    // return `This action returns all track`;
  }

  findOne(id: UUID) {
    return dataBase.getTrackByID(id);
    // return `This action returns a #${id} track`;
  }

  update(id: UUID, updateTrackDto: UpdateTrackDto) {
    const track = dataBase.getTrackByID(id);
    if (!track) throw new NotFoundException(`Track with id ${id} not found`);
    track.name = updateTrackDto.name;
    track.albumId = updateTrackDto.albumId;
    track.artistId = updateTrackDto.artistId;
    track.duration = updateTrackDto.duration;
    // album = { ...updateAlbumDto };
    // const updatedAlbum = { ...album, ...updateAlbumDto };
    const outputAlbum = dataBase.updateTrackByID(id, track);
    return outputAlbum;
    //  return `This action updates a #${id} album`;
    // return `This action updates a #${id} track`;
  }

  remove(id: UUID) {
    return dataBase.delTrackByID(id);
    // return `This action removes a #${id} track`;
  }
}
