import { Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { GuardianEntity } from '../entities/guardian.entity';
import { CreateGuardianDto } from '../dto/request/create_guardian_dto';
import { UpdateGuardianDto } from '../dto/request/update_guardian_dto';
import { gravity } from 'sharp';

@Injectable()
export class GuardianRepository {
    constructor(
        @InjectRepository(GuardianEntity)
        private readonly GuardianRepository: Repository<GuardianEntity>
    ){}
    
    /**
     * POST: 보호자 등록
     * @param GuardianData: 생성 정보
     * @returns 
     */
    async createGuardian(GuardianData: CreateGuardianDto){
        return await this.GuardianRepository.save(GuardianData);
    }

    // UPDATE: 보호자 정보 수정
    async updateGuardian(GuardianData: UpdateGuardianDto) {
        const { id, name, phone_number } = GuardianData;
        const guardian = await this.GuardianRepository.findOneByOrFail({ id: id });
        guardian.name = name;
        guardian.phone_number = phone_number;
        return this.GuardianRepository.save(GuardianData);
    }
}