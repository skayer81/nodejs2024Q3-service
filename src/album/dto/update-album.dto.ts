import { PartialType } from '@nestjs/mapped-types';
import { CreateAlbumDto } from './create-album.dto';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { UUID } from 'crypto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAlbumDto extends PartialType(CreateAlbumDto) {
  @ApiProperty({
    description: 'Album name',
    example: 'Cool Album',
  })
  @IsString()
  name: string;
  @ApiProperty({
    description: 'Album year',
    example: '2024',
  })
  @IsNumber()
  year: number;
  @ApiProperty({
    description: 'Artist ID',
    example: '554528b4-ce22-4e7d-9f34-e5cd9e222701',
  })
  @IsOptional()
  @IsUUID()
  artistId: UUID | null;
}
