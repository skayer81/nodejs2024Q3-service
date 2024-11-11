import { PartialType } from '@nestjs/mapped-types';
import { CreateArtistDto } from './create-artist.dto';
import { IsBoolean, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateArtistDto extends PartialType(CreateArtistDto) {
  @ApiProperty({
    description: 'Artist name',
    example: 'Cool Artist',
  })
  @IsString()
  name: string;
  @ApiProperty({
    description: 'the artist received a Grammy',
    example: 'true',
  })
  @IsBoolean()
  grammy: boolean;
}
