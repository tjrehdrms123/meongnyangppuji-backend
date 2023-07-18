import { Repository } from 'typeorm';
import { GetAnimalTypeNameDto } from 'src/animal_type/dto/get_animal_type_name_dto';
import { GetAnimalTypeByDetailNameDto } from 'src/animal_type/dto/get_animal_type_by_detail_name_dto';
import { UpdateAnimalTypeByDetailNameDto } from 'src/animal_type/dto/update_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeByDetailNameDto } from 'src/animal_type/dto/delete_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeNameDto } from 'src/animal_type/dto/delete_animal_type_by_name_dto';
import { AnimalTypeEntity } from 'src/animal_type/entities/animal_type.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAnimalTypeDto } from '../dto/create_animal_type_dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorDefine } from 'src/common/define/ErrorDefine';

@Injectable()
export class AnimalTypeRepository {
    constructor(
        @InjectRepository(AnimalTypeEntity)
        private readonly animalTypeRepository: Repository<AnimalTypeEntity>
    ){}

    // GET: name을 distinct로 반환
    async getAnimalTypeName(animalTypeData: GetAnimalTypeNameDto) {
        const distinctValues = await this.animalTypeRepository
        .createQueryBuilder('animal_type')
        .select('DISTINCT animal_type.name', animalTypeData.name)
        .getRawMany();

        return distinctValues.map((value) => value.name);
    }

    // GET: name을 줬을때 detail_name값을 반환
    async getAnimalTypeByDetailName(animalTypeData: GetAnimalTypeByDetailNameDto) {
        const { name } = animalTypeData;
        const animalType = await this.animalTypeRepository.findOneByOrFail({ name });
        return animalType.detail_name;
    }

    /**
     * POST: 반려동물 종류 등록
     * @param animalTypeData: 생성 정보
     * @returns 
     */
    async createAnimalType(animalTypeData: CreateAnimalTypeDto): Promise<AnimalTypeEntity | null>{
        const { name, detail_name } = animalTypeData;
        const animalType = this.animalTypeRepository.findOne({ where : {'detail_name': detail_name} });
        if(animalType){
            throw new BadRequestException(ErrorDefine['ERROR-1000']);
        }
        const newAnimalType = this.animalTypeRepository.create(animalTypeData);
        return await this.animalTypeRepository.save(newAnimalType);
    }

    // PUT: 반려동물 상세 이름 수정
    async updateAnimalTypeByDetailName(animalTypeData: UpdateAnimalTypeByDetailNameDto) {
        const { id, detail_name } = animalTypeData;
        const animalType = await this.animalTypeRepository.findOneByOrFail({ id: animalTypeData.id });

        animalType.detail_name = detail_name;
        return this.animalTypeRepository.save(animalType);
    }

    // DELETE: 반려동물 상세 이름으로 삭제
    async deleteAnimalTypeByDetailName(animalTypeData: DeleteAnimalTypeByDetailNameDto) {
        const { detail_name } = animalTypeData;
        return this.animalTypeRepository.softDelete({ detail_name });
    }

    // DELETE: 반려동물 이름으로 삭제
    async deleteAnimalByName(animalTypeData: DeleteAnimalTypeNameDto) {
        const { name } = animalTypeData;
        return this.animalTypeRepository.softDelete({ name });
    }
}