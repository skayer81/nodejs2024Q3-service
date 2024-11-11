import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  // id: string; // uuid v4
  @ApiProperty({
    description: 'login of user',
    example: 'TestLogin',
  })
  @IsString()
  login: string;
  @ApiProperty({
    description: 'password of user',
    example: 'TestPassword',
  })
  @IsString()
  password: string;
}
