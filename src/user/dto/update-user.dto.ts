import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    description: 'old password',
    example: 'testOldPassword',
  })
  @IsString()
  oldPassword: string;
  @ApiProperty({
    description: 'new password',
    example: 'testNewPassword',
  })
  @IsString()
  newPassword: string;
}
