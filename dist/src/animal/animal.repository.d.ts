import { Repository } from 'typeorm';
import { AnimalEntity } from './animal.entity';
import { CreateAnimalDto } from './dto/request/create_animal_dto';
import { GetAnimalDto } from './dto/request/get_animal_dto';
import { UpdateAnimalDto } from './dto/request/update_animal_dto';
import { DeleteAnimalDto } from './dto/request/delete_animal_dto';
import { GetListAniamlDto } from './dto/request/get_list_animal_dto';
export declare class AnimalRepository {
    private readonly AnimalRepository;
    constructor(AnimalRepository: Repository<AnimalEntity>);
    createAnimal(animalData: CreateAnimalDto): Promise<AnimalEntity | null>;
    updateAnimal(animalData: UpdateAnimalDto): Promise<AnimalEntity | null>;
    deleteAnimal(animalData: DeleteAnimalDto): Promise<any>;
    getAniaml(animalData: GetAnimalDto): Promise<AnimalEntity[] | null>;
    isExitsAnimal(animalId: any): Promise<AnimalEntity | null>;
    getListAnimal(animalData: GetListAniamlDto, item: string): Promise<any[]>;
}
