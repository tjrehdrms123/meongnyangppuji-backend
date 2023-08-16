import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { UpdateGuardianDto } from '../dto/request/update_guardian_dto';
import { DeleteGuardianDto } from '../dto/request/delete_guardian_dto';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { FindGuardianDto } from '../dto/request/find_guardian_dto';
import { GuardianAnimalEntity } from '../entities/guardian_animal.entity';
import { GuardianAnimalRepository } from '../infra/guardian_animal.repository';
import { CreateGuardianAnimalDto } from '../dto/request/create_guardian_animal_dto';

@Injectable()
export class GuardianAnimalService {
  private readonly logger = new Logger(GuardianAnimalService.name);
  constructor(
    private readonly guardianAnimalRepository: GuardianAnimalRepository,
  ) {}

  // POST: 보호자/반려동물 연결 데이터 등록
  async createGuardian(GuardianAnimalData: CreateGuardianAnimalDto): Promise<GuardianAnimalEntity | null> {
    return await this.guardianAnimalRepository.createGuardian(GuardianAnimalData);
  }
}
