import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UploadsEntity } from '../entities/uplosds.entity';
import { UploadsDto } from '../dto/uploads.dto';

@Injectable()
export class UploadsRepository {
    constructor(
        @InjectRepository(UploadsEntity)
        private readonly UploadsRepository: Repository<UploadsEntity>
    ){}
    
    /**
     * POST: image 등록
     * @param UploadsData
     * @returns 등록 URL
     */
    async createImg(uploadsData: UploadsDto): Promise<UploadsEntity | null>{
        return await this.UploadsRepository.save(uploadsData);
    }
}