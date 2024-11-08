import { PartialType } from '@nestjs/mapped-types';
import { CreateAlbumDto } from './create-album.dto';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateAlbumDto extends PartialType(CreateAlbumDto) {
  @IsString()
  name: string;
  @IsNumber()
  year: number;
  @IsOptional()
  @IsUUID()
  artistId: string | null; // refers to Artist
}
