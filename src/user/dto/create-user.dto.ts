import { IsString } from 'class-validator';

export class CreateUserDto {
  // id: string; // uuid v4
  @IsString()
  login: string;
  @IsString()
  password: string;
}
