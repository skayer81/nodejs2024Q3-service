import { IsOptional } from 'class-validator';
import { UUID } from 'crypto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFavDto {
  @ApiProperty({
    description: 'IDs of favorite artists',
    type: String,
    required: false,
    example: '554528b4-ce22-4e7d-9f34-e5cd9e222701',
  })
  @IsOptional()
  artists: UUID;

  @ApiProperty({
    description: 'IDs of favorite albums',
    type: String,
    required: false,
    example: '554528b4-ce22-4e7d-9f34-e5cd9e222701',
  })
  @IsOptional()
  albums: UUID;

  @ApiProperty({
    description: 'IDs of favorite tracks',
    type: String,
    required: false,
    example: '554528b4-ce22-4e7d-9f34-e5cd9e222701',
  })
  @IsOptional()
  tracks: UUID;
}
