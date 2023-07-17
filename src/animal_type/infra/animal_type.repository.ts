import { Repository } from 'typeorm';
import { GetAnimalTypeNameDto } from 'src/animal_type/dto/get_animal_type_name_dto';
import { GetAnimalTypeByDetailNameDto } from 'src/animal_type/dto/get_animal_type_by_detail_name_dto';
import { UpdateAnimalTypeByDetailNameDto } from 'src/animal_type/dto/update_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeByDetailNameDto } from 'src/animal_type/dto/delete_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeNameDto } from 'src/animal_type/dto/delete_animal_type_by_name_dto';
import { AnimalTypeEntity } from 'src/animal_type/entities/animal_type.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AnimalTypeRepositoryInterface } from './base/animal_type.repository.interface';
import { CreateAnimalTypeDto } from '../dto/create_animal_type_dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AnimalTypeRepository extends Repository<AnimalTypeEntity> implements AnimalTypeRepositoryInterface<AnimalTypeEntity> {

    constructor(
        @InjectRepository(AnimalTypeEntity)
        private readonly animalTypeRepository: Repository<AnimalTypeEntity>
    ) {
        super(animalTypeRepository.target, animalTypeRepository.manager, animalTypeRepository.queryRunner);
    }

    // GET: name을 distinct로 반환
    public async getAnimalTypeName(animalTypeData: GetAnimalTypeNameDto) {
        const distinctValues = await this.animalTypeRepository
        .createQueryBuilder('animal_type')
        .select('DISTINCT animal_type.name', animalTypeData.name)
        .getRawMany();

        return distinctValues.map((value) => value.name);
    }

    // GET: name을 줬을때 detail_name값을 반환
    public async getAnimalTypeByDetailName(animalTypeData: GetAnimalTypeByDetailNameDto) {
        const { name } = animalTypeData;
        const animalType = await this.animalTypeRepository.findOneByOrFail({ name });
        return animalType.detail_name;
    }

    // POST: 반려동물 종류 등록
    public async createAnimalType(animalTypeData: CreateAnimalTypeDto) {
        try{
            const newAnimalType = this.animalTypeRepository.create(animalTypeData);
            return await this.animalTypeRepository.save(newAnimalType);
        } catch(e){
            throw new BadRequestException('test');
        }
    }

    // PUT: 반려동물 상세 이름 수정
    public async updateAnimalTypeByDetailName(animalTypeData: UpdateAnimalTypeByDetailNameDto) {
        const { id, detail_name } = animalTypeData;
        const animalType = await this.animalTypeRepository.findOneByOrFail({ id: animalTypeData.id });

        animalType.detail_name = detail_name;
        return this.animalTypeRepository.save(animalType);
    }

    // DELETE: 반려동물 상세 이름으로 삭제
    public async deleteAnimalTypeByDetailName(animalTypeData: DeleteAnimalTypeByDetailNameDto) {
        const { detail_name } = animalTypeData;
        return this.animalTypeRepository.softDelete({ detail_name });
    }

    // DELETE: 반려동물 이름으로 삭제
    public async deleteAnimalByName(animalTypeData: DeleteAnimalTypeNameDto) {
        const { name } = animalTypeData;
        return this.animalTypeRepository.softDelete({ name });
    }
}