import { PartialType } from '@nestjs/mapped-types';
import { CreateTrackDto } from './create-track.dto';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateTrackDto extends PartialType(CreateTrackDto) {
  @IsString()
  name: string;
  @IsOptional()
  @IsUUID()
  artistId: string | null; // refers to Artist
  @IsOptional()
  @IsUUID()
  albumId: string | null; // refers to Album
  @IsNumber()
  duration: number; // integer number
}
