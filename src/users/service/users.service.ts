import { Injectable, Logger } from '@nestjs/common';
import { CreateUsersDto } from '../dto/request/create_users_dto';
import { UsersRepository } from '../infra/Users.repository';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(
    private readonly usersRepository: UsersRepository,
  ) {}

  async createUsers(usersData: CreateUsersDto){
    return await this.usersRepository.createUsers(usersData);
  }

  async getByMyId(){
    return await this.usersRepository.getByMyId();
  }
}
