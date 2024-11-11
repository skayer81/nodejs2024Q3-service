import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  NotFoundException,
  ParseUUIDPipe,
  Put,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UUID } from 'crypto';
import { User } from './entities/user.entity';

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'User  created', type: User })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of users',
    type: User,
    isArray: true,
  })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'User  found', type: User })
  @ApiResponse({ status: 400, description: 'id is not UUID' })
  @ApiResponse({ status: 404, description: 'User  not found' })
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    const result = this.userService.findOne(id);
    if (!result) {
      throw new NotFoundException(`User  with id ${id} not found`);
    }
    return result;
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'User  updated', type: User })
  @ApiResponse({ status: 404, description: 'User  not found' })
  update(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const result = this.userService.update(id, updateUserDto);
    if (!result) {
      throw new NotFoundException(`User  with id ${id} not found`);
    }
    return result;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({ status: 204, description: 'User  deleted' })
  @ApiResponse({ status: 404, description: 'User  not found' })
  remove(@Param('id', ParseUUIDPipe) id: UUID) {
    const result = this.userService.remove(id);
    if (!result) {
      throw new NotFoundException(`User  with id ${id} not found`);
    }
  }
}
