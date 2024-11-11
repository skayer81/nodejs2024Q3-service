import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
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
