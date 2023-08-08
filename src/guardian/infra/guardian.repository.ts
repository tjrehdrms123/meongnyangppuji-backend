import { Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { GuardianEntity } from '../entities/guardian.entity';
import { CreateGuardianDto } from '../dto/request/create_guardian_dto';
import { UpdateGuardianDto } from '../dto/request/update_guardian_dto';
import { gravity } from 'sharp';
import { FindGuardianDto } from '../dto/request/find_guardian_dto';
import { DeleteGuardianDto } from '../dto/request/delete_guardian_dto';

@Injectable()
export class GuardianRepository {
    constructor(
        @InjectRepository(GuardianEntity)
        private readonly GuardianRepository: Repository<GuardianEntity>
    ){}
    
    /**
     * POST: 보호자 등록
     * @param GuardianData
     * @returns 등록된 보호자 정보
     */
    async createGuardian(GuardianData: CreateGuardianDto): Promise<GuardianEntity | null>{
        return await this.GuardianRepository.save(GuardianData);
    }

    /**
     * UPDATE: 보호자 정보 수정
     * @param GuardianData 
     * @returns 변경된 보호자 정보
     */
    async updateGuardian(GuardianData: UpdateGuardianDto): Promise<GuardianEntity | null> {
        const { id, name, phone_number } = GuardianData;
        const guardian = await this.GuardianRepository.findOneBy({ id: id });
        guardian.name = name;
        guardian.phone_number = phone_number;
        return this.GuardianRepository.save(GuardianData);
    }

    /**
     * Exception: 동일한 반려자가 있는지 확인
     * @param guardianId 반려자의 ID
     * @returns 
     */
    async isExitsGuardian(guardianId): Promise<GuardianEntity | null> {
        const guardian = await this.GuardianRepository.findOneBy({ id: guardianId });
        return guardian;
    }

    /**
     * DELETE: 보호자 삭제
     * @param GuardianData 
     * @returns 삭제된 보호자의 Row
     */
    async deleteGuardian(GuardianData: DeleteGuardianDto): Promise<any> {
        const { id } = GuardianData;
        const guardian = await this.GuardianRepository.softDelete({ id: id });
        return guardian;
    }
}