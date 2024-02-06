import { Repository } from 'typeorm';
import { AnimalTypeEntity } from 'src/animal_type/animal_type.entity';
import { CreateAnimalTypeDto } from './dto/request/create_animal_type_dto';
import { GetAnimalTypeByDetailNameDto } from './dto/request/get_animal_type_by_detail_name_dto';
import { UpdateAnimalTypeByDetailNameDto } from './dto/request/update_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeByDetailNameDto } from './dto/request/delete_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeNameDto } from './dto/request/delete_animal_type_by_name_dto';
export declare class AnimalTypeRepository {
    private readonly animalTypeRepository;
    constructor(animalTypeRepository: Repository<AnimalTypeEntity>);
    getAnimalTypeName(): Promise<AnimalTypeEntity[]>;
    getAnimalTypeByDetailName(animalTypeData: GetAnimalTypeByDetailNameDto): Promise<Object>;
    createAnimalType(animalTypeData: CreateAnimalTypeDto): Promise<AnimalTypeEntity | null>;
    findOneByDetailName(detail_name: string): Promise<AnimalTypeEntity | null>;
    isExitsAnimalType(id: any): Promise<AnimalTypeEntity | null>;
    updateAnimalTypeByDetailName(animalTypeData: UpdateAnimalTypeByDetailNameDto): Promise<AnimalTypeEntity | null>;
    deleteAnimalTypeByDetailName(animalTypeData: DeleteAnimalTypeByDetailNameDto): Promise<any>;
    deleteAnimalByName(animalTypeData: DeleteAnimalTypeNameDto): Promise<any>;
}
