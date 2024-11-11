import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTrackDto {
  @ApiProperty({
    description: 'track name',
    example: 'cool song',
  })
  @IsString()
  name: string;
  @ApiProperty({
    description: 'artist ID',
    example: '92633f50-f4db-469a-bcaf-0e72df8e3dde',
  })
  @IsOptional()
  @IsUUID()
  artistId: string | null;
  @ApiProperty({
    description: 'album ID',
    example: 'e1e2c41d-8ad7-4cdd-bd1c-e8a85637c1a7',
  })
  @IsOptional()
  @IsUUID()
  albumId: string | null;
  @ApiProperty({
    description: 'track duration',
    example: 123,
  })
  @IsNumber()
  duration: number;
}
