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

    /**
     * 동일한 보호자의 ID를 갖고 있는지 조회
     * @param guardianId 
     * @returns 
     */
    async findUserByGuardianId(guardianId): Promise<UsersEntity | null> {
        const user = await this.UsersRepository.findOne({
            // where: {
            //     guardian_id: { id: guardianId }, // guardian 속성과의 관계를 로드할 때 id를 사용합니다.
            // }
        });        
        return user;
      }

    async getByMyId(userData: GetUsersDto): Promise<UsersEntity | null> {
        const user =  await this.UsersRepository.find({
            where: {
                id: userData.user_id
            },
            relations: ['guardian_id']
        });
        return user[0];
    }
}