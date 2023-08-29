import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { AnimalRepository } from '../infra/animal.repository';
import { AnimalEntity } from '../entities/animal.entity';
import { CreateAnimalDto } from '../dto/request/create_animal_dto';
import { GetAnimalDto } from '../dto/request/get_animal_dto';
import { UpdateAnimalDto } from '../dto/request/update_animal_dto';
import { DeleteAnimalDto } from '../dto/request/delete_animal_dto';
import { AnimalTypeRepository } from 'src/animal_type/infra/animal_type.repository';
import { QrRepository } from 'src/qr/infra/qr.repository';
import { ErrorDefine } from 'src/common/define/ErrorDefine';

@Injectable()
export class AnimalService {
  private readonly logger = new Logger(AnimalService.name);
  constructor(
    private readonly animalRepository: AnimalRepository,
    private readonly animalTypeRepository: AnimalTypeRepository,
    private readonly qrRepository: QrRepository,
  ) {}

  // POST: Animal 등록
  async createAnimal(animalData: CreateAnimalDto): Promise<AnimalEntity | null> {
    const { animal_type_id, qr_id } = animalData;

    // Exception: ID에 해당하는 반려동물 타입이 없을시
    const exceptionExitsAnimalType = this.animalTypeRepository.isExitsAnimalType(animal_type_id);
    if(!exceptionExitsAnimalType){
      throw new BadRequestException(ErrorDefine['ERROR-1002']);
    }

    // Exception: ID에 해당하는 QR이 없을시
    const exceptionExitsQr = this.qrRepository.isExitsQr(qr_id);
    if(!exceptionExitsQr){
      throw new BadRequestException(ErrorDefine['ERROR-5000']);
    }

    // FEAT: ID에 해당하는 프로필 이미지 예외처리 추가 필요합니다.

    return await this.animalRepository.createAnimal(animalData);
  }

  // UPDATE: Animal 정보 수정
  async updateAnimal(animalData: UpdateAnimalDto): Promise<AnimalEntity | null> {
    const { animal_type_id, qr_id } = animalData;

    // Exception: ID에 해당하는 반려동물 타입이 없을시
    const exceptionExitsAnimalType = this.animalTypeRepository.isExitsAnimalType(animal_type_id);
    if(!exceptionExitsAnimalType){
      throw new BadRequestException(ErrorDefine['ERROR-1002']);
    }

    // Exception: ID에 해당하는 QR이 없을시
    const exceptionExitsQr = this.qrRepository.isExitsQr(qr_id);
    if(!exceptionExitsQr){
      throw new BadRequestException(ErrorDefine['ERROR-5000']);
    }

    return await this.animalRepository.updateAnimal(animalData);
  }

  // DELETE: Animal 삭제
  async deleteAnimal(animalData: DeleteAnimalDto): Promise<any> {
    return await this.animalRepository.deleteAnimal(animalData);
  }

  // GET: Animal 가져오기
  async getAniaml(animalData: GetAnimalDto) {
    const animal = this.animalRepository.getAniaml(animalData)
  }
}