import { Injectable, Logger, PreconditionFailedException } from '@nestjs/common';
import { AnimalTypeEntity } from '../entities/animal_type.entity';
import { AnimalTypeRepository } from '../infra/animal_type.repository';
import { Repository } from 'typeorm';
import { GetAnimalTypeNameDto } from '../dto/get_animal_type_name_dto';
import { GetAnimalTypeByDetailNameDto } from '../dto/get_animal_type_by_detail_name_dto';
import { UpdateAnimalTypeByDetailNameDto } from '../dto/update_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeByDetailNameDto } from '../dto/delete_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeNameDto } from '../dto/delete_animal_type_by_name_dto';
import { CreateAnimalTypeDto } from '../dto/create_animal_type_dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AnimalTypeService {
  private readonly logger = new Logger(AnimalTypeService.name);
  constructor(
    private readonly animalTypeRepository: AnimalTypeRepository,
  ) {}

  // GET: name을 distinct로 반환
  async getAnimalTypeName(animalTypeData: GetAnimalTypeNameDto) {
  }

  // GET: name을 줬을때 detail_name값을 반환
  async getAnimalTypeByDetailName(animalTypeData: GetAnimalTypeByDetailNameDto) {
  }

  // POST: 반려동물 종류 등록
  async createAnimalType(animalTypeData: CreateAnimalTypeDto) {
    try{
      const newAnimalType = await this.animalTypeRepository.createAnimalType(animalTypeData);
      return newAnimalType;
    } catch(error){
      throw error;
    }
  }

  // PUT: 반려동물 상세 이름 수정
  async updateAnimalTypeByDetailName(animalTypeData: UpdateAnimalTypeByDetailNameDto) {
  }

  // DELETE: 반려동물 상세 이름으로 삭제
  async deleteAnimalTypeByDetailName(animalTypeData: DeleteAnimalTypeByDetailNameDto) {
  }

  // DELETE: 반려동물 이름으로 삭제
  async deleteAnimalByName(animalTypeData: DeleteAnimalTypeNameDto) {
  }
}