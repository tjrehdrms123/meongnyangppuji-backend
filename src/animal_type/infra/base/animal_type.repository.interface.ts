import { CreateAnimalTypeDto } from 'src/animal_type/dto/create_animal_type_dto';
import { DeleteAnimalTypeByDetailNameDto } from 'src/animal_type/dto/delete_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeNameDto } from 'src/animal_type/dto/delete_animal_type_by_name_dto';
import { GetAnimalTypeByDetailNameDto } from 'src/animal_type/dto/get_animal_type_by_detail_name_dto';
import { GetAnimalTypeNameDto } from 'src/animal_type/dto/get_animal_type_name_dto';
import { UpdateAnimalTypeByDetailNameDto } from 'src/animal_type/dto/update_animal_type_by_detail_name_dto';
import { DeleteResult } from 'typeorm';

export interface AnimalTypeRepositoryInterface<T> {
  // GET: name을 distinct로 반환
  getAnimalTypeName(animalTypeData: GetAnimalTypeNameDto): Promise<T[]>;

  // GET: name을 줬을때 detail_name값을 반환
  getAnimalTypeByDetailName(animalTypeData: GetAnimalTypeByDetailNameDto): Promise<string>;
  
  // POST: 반려동물 종류 등록
  createAnimalType(animalTypeData: CreateAnimalTypeDto): Promise<T>;
  
  // PUT: 반려동물 상세 이름 수정
  updateAnimalTypeByDetailName(animalTypeData: UpdateAnimalTypeByDetailNameDto): Promise<T>;
  
  // DELETE: 반려동물 상세 이름으로 삭제
  deleteAnimalTypeByDetailName(animalTypeData: DeleteAnimalTypeByDetailNameDto): Promise<DeleteResult>;
  
  // DELETE: 반려동물 이름으로 삭제
  deleteAnimalByName(animalTypeData: DeleteAnimalTypeNameDto): Promise<DeleteResult>;
}