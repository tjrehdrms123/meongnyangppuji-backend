import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { UpdateGuardianDto } from './dto/request/update_guardian_dto';
import { DeleteGuardianDto } from './dto/request/delete_guardian_dto';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { GuardianAnimalEntity } from './guardian_animal.entity';
import { GuardianAnimalRepository } from './guardian_animal.repository';
import { CreateGuardianAnimalDto } from './dto/request/create_guardian_animal_dto';
import { GuardianRepository } from 'src/guardian/guardian.repository';
import { AnimalRepository } from 'src/animal/animal.repository';
import { FindGuardianAnimalDto } from './dto/request/find_guardian_dto';

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

    // Exception: 등록된 보호자의 ID가 존재하지 않을시
    const exceptionExitsGuardian = await this.guardianRepository.isExitsGuardian(guardian_id);
    if (!exceptionExitsGuardian) {
      throw new BadRequestException(ErrorDefine['ERROR-2000']);
    }

    // Exception: 등록된 반려동물의 ID가 존재하지 않을시
    const exceptionExitsAnimal = await this.animalRepository.isExitsAnimal(animal_id);
    if (!exceptionExitsAnimal) {
      throw new BadRequestException(ErrorDefine['ERROR-4000']);
    }

    return await this.guardianAnimalRepository.createGuardian(GuardianAnimalData);
  }

  async getByIdGuardianAnimal(GuardianAnimalData: FindGuardianAnimalDto){
    const { id } = GuardianAnimalData;

    // Exception: 등록된 보호자의 ID가 존재하지 않을시
    const exceptionExitsGuardian = await this.guardianRepository.isExitsGuardian(id);
    if (!exceptionExitsGuardian) {
      throw new BadRequestException(ErrorDefine['ERROR-2000']);
    }
    
    return await this.guardianAnimalRepository.getByIdGuardianAnimal(GuardianAnimalData);
  }
}
