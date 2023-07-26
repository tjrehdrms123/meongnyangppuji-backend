import { Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../entities/users.entity';
import { CreateUsersDto } from '../dto/request/create_users_dto';
import { GetUsersDto } from '../dto/request/get_users_dto';

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
    async createUser(userData: CreateUsersDto){
        return await (await this.UsersRepository.save(userData));
    }

    async findByUserId(userId){
        return await this.UsersRepository.findOne({ where : {user_id: userId} });
    }

    async getByMyId(userData: GetUsersDto){
        const user =  await this.UsersRepository.find({
            where: {
                id: userData.user_id
              },
            relations: ['guardian_id']
        });
        return user;
    }
}