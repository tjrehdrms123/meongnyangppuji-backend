import { Injectable, PreconditionFailedException } from '@nestjs/common';
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
  constructor(
    private readonly animalTypeRepository: AnimalTypeRepository,
  ) {}

  // GET: name을 distinct로 반환
  public async getAnimalTypeName(animalTypeData: GetAnimalTypeNameDto) {
  }

  // GET: name을 줬을때 detail_name값을 반환
  public async getAnimalTypeByDetailName(animalTypeData: GetAnimalTypeByDetailNameDto) {
  }

  // POST: 반려동물 종류 등록
  public async createAnimalType(animalTypeData: CreateAnimalTypeDto) {
    try{
      // 트랜잭션, 이미 존재하는 반려동물인지 체크
      const newAnimalType = this.animalTypeRepository.createAnimalType(animalTypeData);
      return newAnimalType;
    } catch(error){
      console.log(error);
      throw new PreconditionFailedException("에러가 발생했습니다");
    }
  }

  // PUT: 반려동물 상세 이름 수정
  public async updateAnimalTypeByDetailName(animalTypeData: UpdateAnimalTypeByDetailNameDto) {
  }

  // DELETE: 반려동물 상세 이름으로 삭제
  public async deleteAnimalTypeByDetailName(animalTypeData: DeleteAnimalTypeByDetailNameDto) {
  }

  // DELETE: 반려동물 이름으로 삭제
  public async deleteAnimalByName(animalTypeData: DeleteAnimalTypeNameDto) {
  }
}