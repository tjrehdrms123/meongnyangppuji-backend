import { Repository } from 'typeorm';
import { AnimalTypeEntity } from 'src/animal_type/entities/animal_type.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { CreateAnimalTypeDto } from '../dto/request/create_animal_type_dto';
import { GetAnimalTypeByDetailNameDto } from '../dto/request/get_animal_type_by_detail_name_dto';
import { UpdateAnimalTypeByDetailNameDto } from '../dto/request/update_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeByDetailNameDto } from '../dto/request/delete_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeNameDto } from '../dto/request/delete_animal_type_by_name_dto';

@Injectable()
export class AnimalTypeRepository {
    constructor(
        @InjectRepository(AnimalTypeEntity)
        private readonly animalTypeRepository: Repository<AnimalTypeEntity>
    ){}

    // GET: name을 distinct로 반환
    async getAnimalTypeName(): Promise<AnimalTypeEntity[]> {
        const distinctValues = await this.animalTypeRepository
        .createQueryBuilder('animal_type')
        .select('DISTINCT animal_type.name')
        .getRawMany();
        const animalTypeName = distinctValues.map((value) => value.name);
        return animalTypeName;
    }

    // GET: name을 줬을때 detail_name값을 반환
    async getAnimalTypeByDetailName(animalTypeData: GetAnimalTypeByDetailNameDto): Promise<string[]> {
        const { name } = animalTypeData;
        const animalType = await this.animalTypeRepository.find({ where : {name: name} });
        const animalTypeDetailName = animalType.map((value) => value.detail_name);
        return animalTypeDetailName;
    }

    /**
     * POST: 반려동물 종류 등록
     * @param animalTypeData: 생성 정보
     * @returns 
     */
    async createAnimalType(animalTypeData: CreateAnimalTypeDto): Promise<AnimalTypeEntity | null> {
        return await this.animalTypeRepository.save(animalTypeData);
    }

    /**
     * ERROR-1000 : 반려동물 상세 이름 있는지 검사
     * @param detail_name 
     */
    async findOneByDetailName(detail_name: string): Promise<AnimalTypeEntity | null> {
        return await this.animalTypeRepository.findOneBy({ detail_name: detail_name });
    }

    /**
     * ERROR-0005 : 해당 ID가 존재하지 않습니다.
     * @param id 
     * @returns 
     */
    async findOneById(id: string): Promise<AnimalTypeEntity | null> {
        return await this.animalTypeRepository.findOneBy({ id: id });
    }

    // PATCH: 반려동물 상세 이름 수정
    async updateAnimalTypeByDetailName(animalTypeData: UpdateAnimalTypeByDetailNameDto): Promise<AnimalTypeEntity | null> {
        const { id, detail_name } = animalTypeData;
        const animalType = await this.animalTypeRepository.findOneBy({ id: id });

        animalType.detail_name = detail_name;
        return this.animalTypeRepository.save(animalType);
    }

    // DELETE: 반려동물 상세 이름으로 삭제
    async deleteAnimalTypeByDetailName(animalTypeData: DeleteAnimalTypeByDetailNameDto): Promise<any> {
        const { detail_name } = animalTypeData;
        const deleteResult = await this.animalTypeRepository.softDelete({ detail_name });
        const affectedRows = deleteResult.affected;
        return affectedRows;
    }
    
    // DELETE: 반려동물 이름으로 삭제
    async deleteAnimalByName(animalTypeData: DeleteAnimalTypeNameDto): Promise<any> {
        const { name } = animalTypeData;
        const deleteResult = await this.animalTypeRepository.softDelete({ name });
        const affectedRows = deleteResult.affected;
        return affectedRows;
    }
}