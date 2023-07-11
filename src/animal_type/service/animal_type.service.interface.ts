import { CreateAnimalDto } from 'src/animal/dto/create-animal.dto';
import { DeleteAnimalTypeByDetailNameDto } from 'src/animal_type/dto/delete_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeNameDto } from 'src/animal_type/dto/delete_animal_type_by_name_dto';
import { GetAnimalTypeByDetailNameDto } from 'src/animal_type/dto/get_animal_type_by_detail_name_dto';
import { GetAnimalTypeNameDto } from 'src/animal_type/dto/get_animal_type_name_dto';
import { UpdateAnimalTypeByDetailNameDto } from 'src/animal_type/dto/update_animal_type_by_detail_name_dto';
import { DeleteResult } from 'typeorm';

export interface AnimalTypeServiceInterface<T> {
  // GET: name을 distinct로 반환
  getAnimalTypeName(animalTypeData: GetAnimalTypeNameDto);

  // GET: name을 줬을때 detail_name값을 반환
  getAnimalTypeByDetailName(animalTypeData: GetAnimalTypeByDetailNameDto);
  
  // POST: 반려동물 종류 등록
  createAnimalType(animalTypeData: CreateAnimalDto);
  
  // PUT: 반려동물 상세 이름 수정
  updateAnimalTypeByDetailName(animalTypeData: UpdateAnimalTypeByDetailNameDto);
  
  // DELETE: 반려동물 상세 이름으로 삭제
  deleteAnimalTypeByDetailName(animalTypeData: DeleteAnimalTypeByDetailNameDto);
  
  // DELETE: 반려동물 이름으로 삭제
  deleteAnimalByName(animalTypeData: DeleteAnimalTypeNameDto);
}