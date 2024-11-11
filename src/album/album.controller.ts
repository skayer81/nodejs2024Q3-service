import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  Put,
  NotFoundException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { UUID } from 'crypto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('albums')
@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Album created',
    type: CreateAlbumDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request: Missing required fields',
  })
  create(@Body() createAlbumDto: CreateAlbumDto) {
    return this.albumService.create(createAlbumDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of all albums',
    type: [CreateAlbumDto],
  })
  findAll() {
    return this.albumService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Album found',
    type: CreateAlbumDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request: Invalid album ID' })
  @ApiResponse({ status: 404, description: 'Album not found' })
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    const result = this.albumService.findOne(id);
    if (!result) {
      throw new NotFoundException(`Album with id ${id} not found`);
    }
    return result;
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Album updated',
    type: CreateAlbumDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request: Invalid album ID or missing fields',
  })
  @ApiResponse({ status: 404, description: 'Album not found' })
  update(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() updateAlbumDto: UpdateAlbumDto,
  ) {
    const result = this.albumService.update(id, updateAlbumDto);
    if (!result) {
      throw new NotFoundException(`Album with id ${id} not found`);
    }
    return result;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({ status: 204, description: 'Album deleted' })
  @ApiResponse({ status: 400, description: 'Bad Request: Invalid album ID' })
  @ApiResponse({ status: 404, description: 'Album not found' })
  remove(@Param('id', ParseUUIDPipe) id: UUID) {
    const result = this.albumService.remove(id);
    if (!result) {
      throw new NotFoundException(`Album with id ${id} not found`);
    }
  }
}
