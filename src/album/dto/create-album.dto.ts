import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateAlbumDto {
  @IsString()
  name: string;
  @IsNumber()
  year: number;
  @IsOptional()
  @IsUUID()
  artistId: string | null; // refers to Artist
}
