import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { UploadsDto } from '../dto/uploads.dto';
import { UploadsEntity } from '../entities/uplosds.entity';
import { UploadsRepository } from '../infra/uploads.repository';

@Injectable()
export class UploadsService {
  constructor(
    private readonly uploadsRepository: UploadsRepository,
  ) {}

  // POST: image 등록
  async createImg(uploadsData: UploadsDto): Promise<UploadsEntity | null> {
    return await this.uploadsRepository.createImg(uploadsData);
  }
}
