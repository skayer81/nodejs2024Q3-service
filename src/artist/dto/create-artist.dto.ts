import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class CreateArtistDto {
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
