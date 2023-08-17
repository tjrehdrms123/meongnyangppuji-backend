import { Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GuardianAnimalEntity } from '../entities/guardian_animal.entity';
import { CreateGuardianAnimalDto } from '../dto/request/create_guardian_animal_dto';
import { FindGuardianAnimalDto } from '../dto/request/find_guardian_dto';

@Injectable()
export class GuardianAnimalRepository {
    constructor(
        @InjectRepository(GuardianAnimalEntity)
        private readonly GuardianAnimalRepository: Repository<GuardianAnimalEntity>
    ){}
    
    /**
     * POST: 보호자/반려동물 연결 데이터 등록
     * @param GuardianAnimalData
     * @returns 보호자/반려동물 데이터
     */
    async createGuardian(GuardianAnimalData: CreateGuardianAnimalDto): Promise<GuardianAnimalEntity | null>{
        return await this.GuardianAnimalRepository.save(GuardianAnimalData);
    }

    async getByIdGuardianAnimal(GuardianAnimalData: FindGuardianAnimalDto): Promise<GuardianAnimalEntity | null> {
        const user =  await this.GuardianAnimalRepository.find({
            where: {
                id: GuardianAnimalData.id
            },
            relations: ['guardian_id','animal_id']
        });
        return user[0];
    }
}