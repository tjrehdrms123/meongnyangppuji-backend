import { AnimalService } from '../service/animal.service';
import { CreateAnimalDto } from '../dto/request/create_animal_dto';
import { GetAnimalDto } from '../dto/request/get_animal_dto';
import { UpdateAnimalDto } from '../dto/request/update_animal_dto';
import { DeleteAnimalDto } from '../dto/request/delete_animal_dto';
export declare class AnimalController {
    private readonly animalService;
    constructor(animalService: AnimalService);
    createAnimal(animalData: CreateAnimalDto): Promise<import("../entities/animal.entity").AnimalEntity>;
    updateAnimal(animalData: UpdateAnimalDto): Promise<import("../entities/animal.entity").AnimalEntity>;
    deleteAnimal(animalData: DeleteAnimalDto): Promise<any>;
    getAnimal(animalData: GetAnimalDto): Promise<void>;
}
