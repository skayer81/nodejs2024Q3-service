import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  NotFoundException,
  ParseUUIDPipe,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UUID } from 'crypto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    console.log('userfffs');
    return this.userService.findAll();
  }
  // @Param('id', ParseUUIDPipe) id: string
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    const result = this.userService.findOne(id);
    if (!result) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const result = this.userService.update(id, updateUserDto);
    if (!result) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return result;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: UUID) {
    const result = this.userService.remove(id);
    if (!result) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }
}
