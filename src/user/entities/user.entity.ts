import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { UUID } from 'crypto';

export class User {
  // password: string;

  //   version: number;

  //   createdAt: number;

  //   updatedAt: number;
  @ApiProperty({
    description: 'login of user',
    example: '92633f50-f4db-469a-bcaf-0e72df8e3dde',
  })
  id: UUID;
  @ApiProperty({
    description: 'login of user',
    example: 'TestLogin',
  })
  @IsString()
  login: string;
  //   @ApiProperty({
  //     description: 'password of user',
  //     example: 'TestPassword',
  //   })
  //   @IsString()
  //   password: string;
  @ApiProperty({
    description: 'version of user',
    example: '1',
  })
  @IsNumber()
  version: number;
  @ApiProperty({
    description: 'time of create',
    example: '1',
  })
  @IsNumber()
  createdAt: number;
  @ApiProperty({
    description: 'time of update',
    example: '1',
  })
  @IsNumber()
  updatedAt: number;
}
