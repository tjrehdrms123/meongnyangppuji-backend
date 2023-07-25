import { Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../entities/users.entity';
import { CreateUsersDto } from '../dto/request/create_users_dto';

@Injectable()
export class UsersRepository {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly UsersRepository: Repository<UsersEntity>
    ){}
    
    /**
     * POST: 유저 등록
     * @param UsersData: 생성 정보
     * @returns 
     */
    async createUsers(usersData: CreateUsersDto){
        return await this.UsersRepository.save(usersData);
    }

    async getByMyId(){
        const user =  await this.UsersRepository.find({
            where: {
                id: "38049bd6-95ab-47b0-adc7-175e32a7d47f"
              },
            relations: ['guardian_id']
        });
        return user;
    }
}