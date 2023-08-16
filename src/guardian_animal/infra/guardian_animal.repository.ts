import { Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { gravity } from 'sharp';
import { GuardianAnimalEntity } from '../entities/guardian_animal.entity';
import { CreateGuardianAnimalDto } from '../dto/request/create_guardian_animal_dto';

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
}