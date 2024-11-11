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
      id: randomUUID(),
    };
    const createTrack = dataBase.addTrack(track);
    return createTrack;
  }

  findAll() {
    return dataBase.getTracksAll();
  }

  findOne(id: UUID) {
    return dataBase.getTrackByID(id);
  }

  update(id: UUID, updateTrackDto: UpdateTrackDto) {
    const track = dataBase.getTrackByID(id);
    if (!track) throw new NotFoundException(`Track with id ${id} not found`);
    track.name = updateTrackDto.name;
    track.albumId = updateTrackDto.albumId;
    track.artistId = updateTrackDto.artistId;
    track.duration = updateTrackDto.duration;

    const outputAlbum = dataBase.updateTrackByID(id, track);
    return outputAlbum;
  }

  remove(id: UUID) {
    return dataBase.delTrackByID(id);
  }
}
