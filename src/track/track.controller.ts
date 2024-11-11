import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  NotFoundException,
  BadRequestException,
  Put,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { UUID } from 'crypto';
import { Track } from './entities/track.entity';

@ApiTags('tracks')
@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Track created', type: Track })
  @ApiResponse({ status: 400, description: 'Invalid request body' })
  create(@Body() createTrackDto: CreateTrackDto) {
    return this.trackService.create(createTrackDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of tracks',
    type: [Track],
  })
  findAll() {
    return this.trackService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Track found',
    type: Track,
  })
  @ApiResponse({ status: 400, description: 'Invalid track ID format' })
  @ApiResponse({ status: 404, description: 'Track not found' })
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    const result = this.trackService.findOne(id);
    if (!result) {
      throw new NotFoundException(`Track with id ${id} not found`);
    }
    return result;
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Track updated', type: Track })
  @ApiResponse({ status: 400, description: 'Invalid track ID format' })
  @ApiResponse({ status: 404, description: 'Track not found' })
  update(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() updateTrackDto: UpdateTrackDto,
  ) {
    const result = this.trackService.update(id, updateTrackDto);
    if (!result) {
      throw new NotFoundException(`Track with id ${id} not found`);
    }
    return result;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({ status: 204, description: 'Track deleted' })
  @ApiResponse({ status: 400, description: 'Invalid track ID format' })
  @ApiResponse({ status: 404, description: 'Track not found' })
  remove(@Param('id', ParseUUIDPipe) id: UUID) {
    const result = this.trackService.remove(id);
    if (!result) {
      throw new NotFoundException(`Track with id ${id} not found`);
    }
  }
}
