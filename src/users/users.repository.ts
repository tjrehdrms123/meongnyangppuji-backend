import { Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { CreateUsersDto } from './dto/request/create_users_dto';
import { GetUsersDto } from './dto/request/get_users_dto';
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
    async createUser(userData: CreateUsersDto): Promise<UsersEntity | null> {
        return await this.UsersRepository.save(userData);
    }

    /**
     * 동일한 회원이 있는지 조회
     * @param userId 
     * @returns 
     */
    async findById(userId): Promise<UsersEntity | null> {
        const user = await this.UsersRepository.findOne({ where : {user_id: userId} });
        return user
    }

    async getByMyId(userData: GetUsersDto): Promise<UsersEntity | null> {
        const user =  await this.UsersRepository.find({
            where: {
                id: userData.user_id
            }
        });
        return user[0];
    }
}