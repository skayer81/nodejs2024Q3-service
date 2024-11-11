import {
  ForbiddenException,
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { dataBase } from 'src/dataBase/dataBase';
import { User } from 'src/dataBase/types';
import { randomUUID, UUID } from 'crypto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    const date = new Date();
    const user: User = {
      ...createUserDto,
      id: randomUUID(),
      version: 1,
      createdAt: date.getTime(),
      updatedAt: date.getTime(),
    };
    const createdUser = { ...dataBase.addUser(user) };

    delete createdUser.password;
    return createdUser;
  }

  findAll() {
    return dataBase.getUserAll();
  }

  findOne(id: UUID) {
    return dataBase.getUserByID(id);
  }

  update(id: UUID, updateUserDto: UpdateUserDto) {
    const user = dataBase.getUserByID(id);
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    if (user.password !== updateUserDto.oldPassword) {
      throw new ForbiddenException();
    }
    user.updatedAt = new Date().getTime();
    user.version += 1;
    user.password = updateUserDto.newPassword;

    dataBase.updateUserByID(id, user);
    delete user.password;
    return user;
  }

  remove(id: UUID) {
    return dataBase.delUserByID(id);
  }
}
