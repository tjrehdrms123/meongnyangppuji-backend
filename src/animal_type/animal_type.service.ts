import { BadRequestException, Injectable, Logger, PreconditionFailedException } from '@nestjs/common';
import { AnimalTypeRepository } from './animal_type.repository';
import { CreateAnimalTypeDto } from './dto/request/create_animal_type_dto';
import { GetAnimalTypeByDetailNameDto } from './dto/request/get_animal_type_by_detail_name_dto';
import { UpdateAnimalTypeByDetailNameDto } from './dto/request/update_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeByDetailNameDto } from './dto/request/delete_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeNameDto } from './dto/request/delete_animal_type_by_name_dto';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { AnimalTypeEntity } from './animal_type.entity';

@Injectable()
export class AnimalTypeService {
  private readonly logger = new Logger(AnimalTypeService.name);
  constructor(
    private readonly animalTypeRepository: AnimalTypeRepository,
  ) {}

  // GET: name을 distinct로 반환
  async getAnimalTypeName(): Promise<AnimalTypeEntity[]> {
    return await this.animalTypeRepository.getAnimalTypeName();
  }

  // GET: name을 줬을때 detail_name값을 반환
  async getAnimalTypeByDetailName(animalTypeData: GetAnimalTypeByDetailNameDto): Promise<Object> {
    return await this.animalTypeRepository.getAnimalTypeByDetailName(animalTypeData);
  }

  // POST: 반려동물 종류 등록
  // E2E: 테스트에서 삭제된 행에 있는 detail_name값과 동일한 값을 넣었을떄 500에러 발생 -> 하지만 해당 경우는 없을거기 떄문에 발생하면 추 후 예외처리
  async createAnimalType(animalTypeData: CreateAnimalTypeDto): Promise<AnimalTypeEntity | null>  {
    const { detail_name } = animalTypeData;

    // Exception: 동일한 반려동물이 존재할 시
    const exceptionExitsAnimalType  = await this.animalTypeRepository.findOneByDetailName(detail_name);
    if(exceptionExitsAnimalType){
      throw new BadRequestException(ErrorDefine['ERROR-1000']);
    }

    const newAnimalType = await this.animalTypeRepository.createAnimalType(animalTypeData);
    return newAnimalType;
  }

  // PATCH: 반려동물 상세 이름 수정
  async updateAnimalTypeByDetailName(animalTypeData: UpdateAnimalTypeByDetailNameDto): Promise<AnimalTypeEntity | null>  {
    const { id, detail_name } = animalTypeData;

    // Exception: 업데이트하려고하는 Row가 없을시
    const exceptionNotFoundRow = await this.animalTypeRepository.isExitsAnimalType(id);
    if(!exceptionNotFoundRow){
      throw new BadRequestException(ErrorDefine['ERROR-1002']);
    }

    // Exception: 동일한 반려동물이 존재할 시
    const exceptionExitsAnimalType = await this.animalTypeRepository.findOneByDetailName(detail_name);
    if(exceptionExitsAnimalType){
      throw new BadRequestException(ErrorDefine['ERROR-1000']);
    }

    return await this.animalTypeRepository.updateAnimalTypeByDetailName(animalTypeData);
  }

  // DELETE: 반려동물 상세 이름으로 삭제
  async deleteAnimalTypeByDetailName(animalTypeData: DeleteAnimalTypeByDetailNameDto): Promise<any>  {
    return await this.animalTypeRepository.deleteAnimalTypeByDetailName(animalTypeData);
  }

  // DELETE: 반려동물 이름으로 삭제
  async deleteAnimalByName(animalTypeData: DeleteAnimalTypeNameDto): Promise<any>  {
    return await this.animalTypeRepository.deleteAnimalByName(animalTypeData);
  }
}