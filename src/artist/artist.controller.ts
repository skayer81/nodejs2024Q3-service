import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseUUIDPipe,
  NotFoundException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ArtistService } from './artist.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { UUID } from 'crypto';

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Post()
  create(@Body() createArtistDto: CreateArtistDto) {
    return this.artistService.create(createArtistDto);
  }

  @Get()
  findAll() {
    return this.artistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    const result = this.artistService.findOne(id);
    // return this.artistService.findOne(+id);
    if (!result) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() updateArtistDto: UpdateArtistDto,
  ) {
    const result = this.artistService.update(id, updateArtistDto);
    if (!result) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return result;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: UUID) {
    const result = this.artistService.remove(id);
    if (!result) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return result; //.remove(+id);
  }
}
