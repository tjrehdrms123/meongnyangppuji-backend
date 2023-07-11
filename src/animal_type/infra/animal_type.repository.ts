import { DeleteResult, Repository } from 'typeorm';
import { GetAnimalTypeNameDto } from 'src/animal_type/dto/get_animal_type_name_dto';
import { GetAnimalTypeByDetailNameDto } from 'src/animal_type/dto/get_animal_type_by_detail_name_dto';
import { UpdateAnimalTypeByDetailNameDto } from 'src/animal_type/dto/update_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeByDetailNameDto } from 'src/animal_type/dto/delete_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeNameDto } from 'src/animal_type/dto/delete_animal_type_by_name_dto';
import { AnimalTypeEntity } from 'src/animal_type/entities/animal_type.entity';
import { Injectable } from '@nestjs/common';
import { AnimalTypeRepositoryInterface } from './base/animal_type.repository.interface';
import { CreateAnimalTypeDto } from '../dto/create_animal_type_dto';
import { CustomRepository } from 'src/common/decorators/typeorm.decorator';

@CustomRepository(AnimalTypeEntity)
export class AnimalTypeRepository implements AnimalTypeRepositoryInterface<AnimalTypeEntity> {

    constructor(
        private readonly AnimalTypeRepository: Repository<AnimalTypeEntity>
    ) {}

    // GET: name을 distinct로 반환
    public async getAnimalTypeName(animalTypeData: GetAnimalTypeNameDto) {
        const distinctValues = await this.AnimalTypeRepository
        .createQueryBuilder('animal_type')
        .select('DISTINCT animal_type.name', animalTypeData.name)
        .getRawMany();

        return distinctValues.map((value) => value.name);
    }

    // GET: name을 줬을때 detail_name값을 반환
    public async getAnimalTypeByDetailName(animalTypeData: GetAnimalTypeByDetailNameDto) {
        const { name } = animalTypeData;
        const animalType = await this.AnimalTypeRepository.findOneByOrFail({ name });
        return animalType.detail_name;
    }

    // POST: 반려동물 종류 등록
    public async createAnimalType(animalTypeData: CreateAnimalTypeDto) {
        const newAnimalType = this.AnimalTypeRepository.create(animalTypeData);
        return this.AnimalTypeRepository.save(newAnimalType);
    }

    // PUT: 반려동물 상세 이름 수정
    public async updateAnimalTypeByDetailName(animalTypeData: UpdateAnimalTypeByDetailNameDto) {
        const { id, detail_name } = animalTypeData;
        const animalType = await this.AnimalTypeRepository.findOneByOrFail({ id: animalTypeData.id });

        animalType.detail_name = detail_name;
        return this.AnimalTypeRepository.save(animalType);
    }

    // DELETE: 반려동물 상세 이름으로 삭제
    public async deleteAnimalTypeByDetailName(animalTypeData: DeleteAnimalTypeByDetailNameDto) {
        const { detail_name } = animalTypeData;
        return this.AnimalTypeRepository.softDelete({ detail_name });
    }

    // DELETE: 반려동물 이름으로 삭제
    public async deleteAnimalByName(animalTypeData: DeleteAnimalTypeNameDto) {
        const { name } = animalTypeData;
        return this.AnimalTypeRepository.softDelete({ name });
    }
}