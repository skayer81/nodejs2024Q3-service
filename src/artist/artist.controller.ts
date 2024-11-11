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
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('artists')
@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Artist created',
    type: CreateArtistDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request: Missing required fields',
  })
  create(@Body() createArtistDto: CreateArtistDto) {
    return this.artistService.create(createArtistDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of all artists',
    type: [CreateArtistDto],
  })
  findAll() {
    return this.artistService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Artist found',
    type: CreateArtistDto,
  })
  @ApiResponse({ status: 404, description: 'Artist not found' })
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    const result = this.artistService.findOne(id);
    if (!result) {
      throw new NotFoundException(`Artist with id ${id} not found`);
    }
    return result;
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Artist updated',
    type: CreateArtistDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request: Invalid artist ID or missing fields',
  })
  @ApiResponse({ status: 404, description: 'Artist not found' })
  update(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() updateArtistDto: UpdateArtistDto,
  ) {
    const result = this.artistService.update(id, updateArtistDto);
    if (!result) {
      throw new NotFoundException(`Artist with id ${id} not found`);
    }
    return result;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({ status: 204, description: 'Artist deleted' })
  @ApiResponse({ status: 404, description: 'Artist not found' })
  remove(@Param('id', ParseUUIDPipe) id: UUID) {
    const result = this.artistService.remove(id);
    if (!result) {
      throw new NotFoundException(`Artist with id ${id} not found`);
    }
  }
}
