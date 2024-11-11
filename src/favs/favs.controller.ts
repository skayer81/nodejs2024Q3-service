import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  ParseUUIDPipe,
} from '@nestjs/common';
import { FavsService } from './favs.service';
import { CreateFavDto } from './dto/create-fav.dto';

import { UUID } from 'crypto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('favorites')
@Controller('favs')
export class FavsController {
  constructor(private readonly favsService: FavsService) {}

  @Post('/album/:id')
  @ApiResponse({ status: 201, description: 'Album added to favorites' })
  @ApiResponse({ status: 400, description: 'Bad Request: Invalid album ID' })
  @ApiResponse({
    status: 422,
    description: 'Unprocessable Entity: Album not found',
  })
  createAlbumFav(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() createFavDto: CreateFavDto,
  ) {
    return this.favsService.create(id, 'album');
  }

  @Post('/track/:id')
  @ApiResponse({ status: 201, description: 'Track added to favorites' })
  @ApiResponse({ status: 400, description: 'Bad Request: Invalid track ID' })
  @ApiResponse({
    status: 422,
    description: 'Unprocessable Entity: Track not found',
  })
  createTrackFav(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() createFavDto: CreateFavDto,
  ) {
    return this.favsService.create(id, 'track');
  }

  @Post('/artist/:id')
  @ApiResponse({ status: 201, description: 'Artist added to favorites' })
  @ApiResponse({ status: 400, description: 'Bad Request: Invalid artist ID' })
  @ApiResponse({
    status: 422,
    description: 'Unprocessable Entity: Artist not found',
  })
  createArtistFav(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() createFavDto: CreateFavDto,
  ) {
    return this.favsService.create(id, 'artist');
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of all favorites',
    type: 'FavoritesResponse',
  })
  findAll() {
    return this.favsService.findAll();
  }

  @Delete('/album/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({ status: 204, description: 'Album removed from favorites' })
  @ApiResponse({ status: 400, description: 'Bad Request: Invalid album ID' })
  @ApiResponse({
    status: 404,
    description: 'Not Found: Album not in favorites',
  })
  deleteAlbumFav(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() createFavDto: CreateFavDto,
  ) {
    return this.favsService.remove(id, 'album');
  }

  @Delete('/track/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({ status: 204, description: 'Track removed from favorites' })
  @ApiResponse({ status: 400, description: 'Bad Request: Invalid track ID' })
  @ApiResponse({
    status: 404,
    description: 'Not Found: Track not in favorites',
  })
  deleteTrackFav(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() createFavDto: CreateFavDto,
  ) {
    return this.favsService.remove(id, 'track');
  }

  @Delete('/artist/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({ status: 204, description: 'Artist removed from favorites' })
  @ApiResponse({ status: 400, description: 'Bad Request: Invalid artist ID' })
  @ApiResponse({
    status: 404,
    description: 'Not Found: Artist not in favorites',
  })
  deleteArtistFav(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() createFavDto: CreateFavDto,
  ) {
    return this.favsService.remove(id, 'artist');
  }
}
