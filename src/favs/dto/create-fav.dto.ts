import { IsOptional } from 'class-validator';
import { UUID } from 'crypto';

export class CreateFavDto {
  //  interface Favorites {
  @IsOptional()
  artists: UUID; // favorite artists ids
  @IsOptional()
  albums: UUID; // favorite albums ids
  @IsOptional()
  tracks: UUID; // favorite tracks ids
  //   }
}
