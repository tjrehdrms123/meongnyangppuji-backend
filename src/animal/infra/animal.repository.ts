import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalEntity } from '../entities/animal.entity';
import { CreateAnimalDto } from '../dto/request/create_animal_dto';
import { GetAnimalDto } from '../dto/request/get_animal_dto';
import { UpdateAnimalDto } from '../dto/request/update_animal_dto';
import { DeleteAnimalDto } from '../dto/request/delete_animal_dto';

@Injectable()
export class AnimalRepository {
    constructor(
        @InjectRepository(AnimalEntity)
        private readonly AnimalRepository: Repository<AnimalEntity>
    ){}
    
    /**
     * POST: Animal 등록
     * @param animalData
     * @returns 등록된 Animal 정보
     */
    async createAnimal(animalData: CreateAnimalDto): Promise<AnimalEntity | null>{
        return await this.AnimalRepository.save(animalData);
    }

    /**
     * UPDATE: Animal 정보 수정
     * @param animalData 
     * @returns 변경된 Animal 정보
     */
    async updateAnimal(animalData: UpdateAnimalDto): Promise<AnimalEntity | null> {
        const { id, name, introduction, age, sex, uploads_id, animal_type_id, qr_id } = animalData;
        const animal = await this.AnimalRepository.findOneBy({ id: id });
        animal.name = name;
        animal.introduction = introduction;
        animal.age = age;
        animal.sex = sex;
        animal.uploads_id = uploads_id;
        animal.animal_type_id = animal_type_id;
        animal.qr_id = qr_id;
        return this.AnimalRepository.save(animal);
    }

    /**
     * DELETE: Animal 삭제
     * @param animalData 
     * @returns 삭제된 Animal의 Row
     */
    async deleteAnimal(animalData: DeleteAnimalDto): Promise<any> {
        const { id } = animalData;
        const animal = await this.AnimalRepository.softDelete({ id: id });
        return animal;
    }

    /**
     * GET: Animal 가져오기
     * @param animalData
     * @returns Animal 데이터
     */
    async getAniaml(animalData: GetAnimalDto): Promise<AnimalEntity[] | null> {
        const { id } = animalData;
        const animal = await this.AnimalRepository.find({
            where: {
                id: id
            },
            relations: ['animal_type_id','qr_id']
        })
        return animal;
    }

    /**
     * ERROR-4000 동일한 반려동물이 있는지 확인 
     * @param guardianId 반려둥물 ID
     * @returns 
     */
    async isExitsAnimal(animalId): Promise<AnimalEntity | null> {
        const animal = await this.AnimalRepository.findOneBy({ id: animalId });
        return animal;
    }
}