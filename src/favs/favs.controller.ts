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
  ParseUUIDPipe,
} from '@nestjs/common';
import { FavsService } from './favs.service';
import { CreateFavDto } from './dto/create-fav.dto';
import { UpdateFavDto } from './dto/update-fav.dto';
import { UUID } from 'crypto';

@Controller('favs')
export class FavsController {
  constructor(private readonly favsService: FavsService) {}

  @Post('/album/:id')
  createAlbumFav(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() createFavDto: CreateFavDto,
  ) {
    return this.favsService.create(id, 'album');
  }
  @Post('/track/:id')
  createTrackFav(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() createFavDto: CreateFavDto,
  ) {
    return this.favsService.create(id, 'track');
  }
  @Post('/artist/:id')
  createArtistFav(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() createFavDto: CreateFavDto,
  ) {
    return this.favsService.create(id, 'artist');
  }

  @Get()
  findAll() {
    // console.log('++++++++++++++++++++++++++++++++++++++++++++++');
    // const test = '+++++++++++++++++++++';
    return this.favsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.favsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFavDto: UpdateFavDto) {
  //   return this.favsService.update(+id, updateFavDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.favsService.remove(+id);
  // }
  @Delete('/album/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteAlbumFav(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() createFavDto: CreateFavDto,
  ) {
    return this.favsService.remove(id, 'album');
  }
  @Delete('/track/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteTrackFav(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() createFavDto: CreateFavDto,
  ) {
    return this.favsService.remove(id, 'track');
  }
  @Delete('/artist/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteArtistFav(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() createFavDto: CreateFavDto,
  ) {
    return this.favsService.remove(id, 'artist');
  }
}
