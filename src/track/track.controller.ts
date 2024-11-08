import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  NotFoundException,
  Put,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { UUID } from 'crypto';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Post()
  create(@Body() createTrackDto: CreateTrackDto) {
    return this.trackService.create(createTrackDto);
  }

  @Get()
  findAll() {
    return this.trackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    const result = this.trackService.findOne(id);
    if (!result) {
      throw new NotFoundException(`Track with id ${id} not found`);
    }
    return result;
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() updateTrackDto: UpdateTrackDto,
  ) {
    const result = this.trackService.update(id, updateTrackDto);
    if (!result) {
      throw new NotFoundException(`Track with id ${id} not found`);
    }
    return result;
    //return this.trackService.update(+id, updateTrackDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: UUID) {
    const result = this.trackService.remove(id);

    if (!result) {
      throw new NotFoundException(`Track with id ${id} not found`);
    }
    return result;
  }
}
