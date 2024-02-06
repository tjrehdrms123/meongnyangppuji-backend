import { AnimalTypeRepository } from './animal_type.repository';
import { CreateAnimalTypeDto } from './dto/request/create_animal_type_dto';
import { GetAnimalTypeByDetailNameDto } from './dto/request/get_animal_type_by_detail_name_dto';
import { UpdateAnimalTypeByDetailNameDto } from './dto/request/update_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeByDetailNameDto } from './dto/request/delete_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeNameDto } from './dto/request/delete_animal_type_by_name_dto';
import { AnimalTypeEntity } from './animal_type.entity';
export declare class AnimalTypeService {
    private readonly animalTypeRepository;
    private readonly logger;
    constructor(animalTypeRepository: AnimalTypeRepository);
    getAnimalTypeId(detail_name: string): Promise<any>;
    getAnimalTypeName(): Promise<AnimalTypeEntity[]>;
    getAnimalTypeByDetailName(animalTypeData: GetAnimalTypeByDetailNameDto): Promise<string[]>;
    createAnimalType(animalTypeData: CreateAnimalTypeDto): Promise<AnimalTypeEntity | null>;
    updateAnimalTypeByDetailName(animalTypeData: UpdateAnimalTypeByDetailNameDto): Promise<AnimalTypeEntity | null>;
    deleteAnimalTypeByDetailName(animalTypeData: DeleteAnimalTypeByDetailNameDto): Promise<any>;
    deleteAnimalByName(animalTypeData: DeleteAnimalTypeNameDto): Promise<any>;
}
