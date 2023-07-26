import { Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../entities/users.entity';
import { CreateUsersDto } from '../dto/request/create_users_dto';
import { GetUsersDto } from '../dto/request/get_users_dto';
import { ErrorDefine } from 'src/common/define/ErrorDefine';

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

    async findById(userId){
        const user = await this.UsersRepository.findOne({ where : {user_id: userId} });
        if (!user) {
            throw new BadRequestException(ErrorDefine['ERROR-3000']);
        }
        return user
    }

    async findByGuardianId(guardianId){
        const user = await this.UsersRepository.findOne({ where : {guardian_id: guardianId} });
        if (!user) {
            throw new BadRequestException(ErrorDefine['ERROR-3003']);
        }
        return user;
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