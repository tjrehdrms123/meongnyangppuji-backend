import { AnimalTypeService } from './animal_type.service';
import { CreateAnimalTypeDto } from './dto/request/create_animal_type_dto';
import { UpdateAnimalTypeByDetailNameDto } from './dto/request/update_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeByDetailNameDto } from './dto/request/delete_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeNameDto } from './dto/request/delete_animal_type_by_name_dto';
export declare class AnimalTypeController {
    private readonly animalTypeService;
    constructor(animalTypeService: AnimalTypeService);
    createAnimalType(animalTypeData: CreateAnimalTypeDto): Promise<import("./animal_type.entity").AnimalTypeEntity>;
    getAnimalTypeName(): Promise<import("./animal_type.entity").AnimalTypeEntity[]>;
    getAnimalTypeByDetailName(name: string): Promise<string[]>;
    updateAnimalTypeByDetailName(animalTypeData: UpdateAnimalTypeByDetailNameDto): Promise<import("./animal_type.entity").AnimalTypeEntity>;
    deleteAnimalTypeByDetailName(animalTypeData: DeleteAnimalTypeByDetailNameDto): Promise<any>;
    deleteAnimalByName(animalTypeData: DeleteAnimalTypeNameDto): Promise<any>;
}
