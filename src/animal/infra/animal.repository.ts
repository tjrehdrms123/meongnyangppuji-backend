import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalEntity } from '../entities/animal.entity';
import { CreateAnimalDto } from '../dto/request/create_animal_dto';
import { GetAnimalDto } from '../dto/request/get_animal_dto';
import { UpdateAnimalDto } from '../dto/request/update_animal_dto';
import { DeleteAnimalDto } from '../dto/request/delete_animal_dto';
import { GetListAniamlDto } from '../dto/request/get_list_animal_dto';

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
        //Read: 추 후 update 코드 for in 문으로 변경
        const { id, name, introduction, age, sex, uploads_id, animal_type_id, qr_id, card_id } = animalData;
        const animal = await this.AnimalRepository.findOneBy({ id: id });
        animal.name = name;
        animal.introduction = introduction;
        animal.age = age;
        animal.sex = sex;
        animal.uploads_id = uploads_id;
        animal.animal_type_id = animal_type_id;
        animal.qr_id = qr_id;
        animal.card_id = card_id;
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
            relations: ['animal_type_id','qr_id','card_id']
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

    /**
     * GET: Animal 목록 조회
     * @param animalData 
     * @returns 반려동물 목록
     */
    async getListAnimal(animalData: GetListAniamlDto) {
        const { order, type_name, sort_type } = animalData;

        // Read: 조회수당 0.1점, 좋아요당 0.3점, 생성일 기준 오늘로부터 하루씩 멀어질때 마다 -0.1(신규 유저 배려)
        const result = await this.AnimalRepository.createQueryBuilder('animal')
        .select([
          'animal.id',
          'animal.name',
          'animal.uploads_id',
          'animal.like',
          '(animal.like * 0.3) as likeCal',
          '(animal.read * 0.1) as readCal',
          'DATEDIFF(NOW(), animal.created_at) * -0.1 as datediffCal',
          '(animal.like * 0.3 + animal.read * 0.1 + DATEDIFF(NOW(), animal.created_at) * -0.1) as scoreAvg',
        ])
        .orderBy('scoreAvg', 'DESC')
        .getRawMany();
        return result;
    }

    // async getListAnimal(animalData: GetListAniamlDto) {
    //     const { order, type_name, sort_type } = animalData;

    //     // Read: 조회수당 0.1점, 좋아요당 0.3점, 생성일 기준 오늘로부터 하루씩 멀어질때 마다 -0.1(신규 유저 배려)
    //     const result = await this.AnimalRepository.createQueryBuilder('animal')
    //     .select([
    //         'animal.*',
    //         '(animal.like * 0.3) as likeCal',
    //         '(animal.read * 0.1) as readCal',
    //         'DATEDIFF(NOW(), animal.created_at) * -0.1 as datediffCal',
    //         'animal.animal_type_id',
    //         'at2.name as type_name',
    //         '((animal.like * 0.3) + (animal.read * 0.1) + (DATEDIFF(NOW(), animal.created_at) * -0.1)) as scoreAvg',
    //     ])
    //     .innerJoinAndSelect('animal.animal_type', 'at2')
    //     .where('at2.name = :typeName', { typeName: type_name })
    //     .orderBy(`${order}`, sort_type)
    //     .getRawMany();

    //     return result;
    // }
}