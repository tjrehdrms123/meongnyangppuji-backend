import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { AnimalRepository } from './animal.repository';
import { AnimalEntity } from './animal.entity';
import { CreateAnimalDto } from './dto/request/create_animal_dto';
import { GetAnimalDto } from './dto/request/get_animal_dto';
import { UpdateAnimalDto } from './dto/request/update_animal_dto';
import { DeleteAnimalDto } from './dto/request/delete_animal_dto';
import { AnimalTypeRepository } from 'src/animal_type/animal_type.repository';
import { QrRepository } from 'src/qr/qr.repository';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { UploadsRepository } from 'src/uploads/infra/uploads.repository';
import { GetListAniamlDto } from './dto/request/get_list_animal_dto';

@Injectable()
export class AnimalService {
  private readonly logger = new Logger(AnimalService.name);
  constructor(
    private readonly animalRepository: AnimalRepository,
    private readonly animalTypeRepository: AnimalTypeRepository,
    private readonly qrRepository: QrRepository,
    private readonly uploadsRepository: UploadsRepository,
  ) {}

  // POST: Animal 등록
  async createAnimal(animalData: CreateAnimalDto): Promise<AnimalEntity | null> {
    const { animal_type_id, qr_id, uploads_id, card_id } = animalData;

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

    // Exception: ID에 해당하는 Image가 없을시
    const exceptionExitsImg = this.uploadsRepository.isExitsImg(uploads_id);
    if(!exceptionExitsImg){
      throw new BadRequestException(ErrorDefine['ERROR-6000']);
    }

    // Exception: ID에 해당하는 Card가 없을시
    const exceptionExitsCard = this.uploadsRepository.isExitsImg(card_id);
    if(!exceptionExitsCard){
      throw new BadRequestException(ErrorDefine['ERROR-7000']);
    }

    return await this.animalRepository.createAnimal(animalData);
  }

  // UPDATE: Animal 정보 수정
  async updateAnimal(animalData: UpdateAnimalDto): Promise<AnimalEntity | null> {
    const { animal_type_id, uploads_id, qr_id, card_id } = animalData;

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

    // Exception: ID에 해당하는 Image가 없을시
    const exceptionExitsImg = this.uploadsRepository.isExitsImg(uploads_id);
    if(!exceptionExitsImg){
      throw new BadRequestException(ErrorDefine['ERROR-6000']);
    }

    // Exception: ID에 해당하는 Card가 없을시
    const exceptionExitsCard = this.uploadsRepository.isExitsImg(card_id);
    if(!exceptionExitsCard){
      throw new BadRequestException(ErrorDefine['ERROR-7000']);
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

  // GET: Animal 목록 조회
  async getListAniaml(animalData: GetListAniamlDto) {
    const { option } = animalData;
    let item = '';
    switch(option){
      case 1: 
        item = 'scoreAvg'; //Read: 인기순
        break;
      case 2:
        item = 'created_at'; //Read: 등록일 순
        break;
      case 3:
        item = 'readCal'; //Read: 조회수 순
        break;
    }

    return this.animalRepository.getListAnimal(animalData, item);
  }
}