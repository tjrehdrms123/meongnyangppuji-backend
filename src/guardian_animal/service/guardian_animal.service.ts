import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { UpdateGuardianDto } from '../dto/request/update_guardian_dto';
import { DeleteGuardianDto } from '../dto/request/delete_guardian_dto';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { FindGuardianDto } from '../dto/request/find_guardian_dto';
import { GuardianAnimalEntity } from '../entities/guardian_animal.entity';
import { GuardianAnimalRepository } from '../infra/guardian_animal.repository';
import { CreateGuardianAnimalDto } from '../dto/request/create_guardian_animal_dto';
import { GuardianRepository } from 'src/guardian/infra/guardian.repository';
import { AnimalRepository } from 'src/animal/infra/animal.repository';

@Injectable()
export class GuardianAnimalService {
  private readonly logger = new Logger(GuardianAnimalService.name);
  constructor(
    private readonly guardianAnimalRepository: GuardianAnimalRepository,
    private readonly guardianRepository: GuardianRepository,
    private readonly animalRepository: AnimalRepository,
  ) {}

  // POST: 보호자/반려동물 연결 데이터 등록
  async createGuardian(GuardianAnimalData: CreateGuardianAnimalDto): Promise<GuardianAnimalEntity | null> {
    const { guardian_id, animal_id } = GuardianAnimalData;

    // Exception: 보호자의 ID가 없을시
    const exceptionExitsGuardian = await this.guardianRepository.isExitsGuardian(guardian_id);
    if (!exceptionExitsGuardian) {
      throw new BadRequestException(ErrorDefine['ERROR-2000']);
    }

    // Exception: 반려동물의 ID가 없을시
    const exceptionExitsAnimal = await this.animalRepository.isExitsAnimal(animal_id);
    if (!exceptionExitsAnimal) {
      throw new BadRequestException(ErrorDefine['ERROR-4000']);
    }

    return await this.guardianAnimalRepository.createGuardian(GuardianAnimalData);
  }
}
