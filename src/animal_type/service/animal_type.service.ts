import { BadRequestException, Injectable, Logger, PreconditionFailedException } from '@nestjs/common';
import { AnimalTypeRepository } from '../infra/animal_type.repository';
import { CreateAnimalTypeDto } from '../dto/request/create_animal_type_dto';
import { GetAnimalTypeByDetailNameDto } from '../dto/request/get_animal_type_by_detail_name_dto';
import { UpdateAnimalTypeByDetailNameDto } from '../dto/request/update_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeByDetailNameDto } from '../dto/request/delete_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeNameDto } from '../dto/request/delete_animal_type_by_name_dto';
import { ErrorDefine } from 'src/common/define/ErrorDefine';

@Injectable()
export class AnimalTypeService {
  private readonly logger = new Logger(AnimalTypeService.name);
  constructor(
    private readonly animalTypeRepository: AnimalTypeRepository,
  ) {}

  // GET: name을 distinct로 반환
  async getAnimalTypeName() {
    return await this.animalTypeRepository.getAnimalTypeName();
  }

  // GET: name을 줬을때 detail_name값을 반환
  async getAnimalTypeByDetailName(animalTypeData: GetAnimalTypeByDetailNameDto) {
    return await this.animalTypeRepository.getAnimalTypeByDetailName(animalTypeData);
  }

  // POST: 반려동물 종류 등록
  async createAnimalType(animalTypeData: CreateAnimalTypeDto) {
    const { detail_name } = animalTypeData;
    const animalType = await this.animalTypeRepository.findOneByDetailName(detail_name);
    if(animalType){
      throw new BadRequestException(ErrorDefine['ERROR-1000']);
    }
    const newAnimalType = await this.animalTypeRepository.createAnimalType(animalTypeData);
    return newAnimalType;
  }

  // PATCH: 반려동물 상세 이름 수정
  async updateAnimalTypeByDetailName(animalTypeData: UpdateAnimalTypeByDetailNameDto) {
    return await this.animalTypeRepository.updateAnimalTypeByDetailName(animalTypeData);
  }

  // DELETE: 반려동물 상세 이름으로 삭제
  async deleteAnimalTypeByDetailName(animalTypeData: DeleteAnimalTypeByDetailNameDto) {
    return await this.animalTypeRepository.deleteAnimalTypeByDetailName(animalTypeData);
  }

  // DELETE: 반려동물 이름으로 삭제
  async deleteAnimalByName(animalTypeData: DeleteAnimalTypeNameDto) {
    return await this.animalTypeRepository.deleteAnimalByName(animalTypeData);
  }
}