import { Injectable } from '@nestjs/common';
import { DataBase } from './dataBase/dataBase';

@Injectable()
export class AppService {
  dataBase = new DataBase();
  // constructor(){

  // }
  getHello(): string {
    return 'Hello World!';
  }
}
