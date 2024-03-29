import { AnimalRepository } from './animal.repository';
import { AnimalEntity } from './animal.entity';
import { CreateAnimalDto } from './dto/request/create_animal_dto';
import { GetAnimalDto } from './dto/request/get_animal_dto';
import { UpdateAnimalDto } from './dto/request/update_animal_dto';
import { DeleteAnimalDto } from './dto/request/delete_animal_dto';
import { AnimalTypeRepository } from 'src/animal_type/animal_type.repository';
import { QrRepository } from 'src/qr/qr.repository';
import { UploadsRepository } from 'src/uploads/infra/uploads.repository';
import { GetListAniamlDto } from './dto/request/get_list_animal_dto';
export declare class AnimalService {
    private readonly animalRepository;
    private readonly animalTypeRepository;
    private readonly qrRepository;
    private readonly uploadsRepository;
    private readonly logger;
    constructor(animalRepository: AnimalRepository, animalTypeRepository: AnimalTypeRepository, qrRepository: QrRepository, uploadsRepository: UploadsRepository);
    createAnimal(animalData: CreateAnimalDto): Promise<AnimalEntity | null>;
    updateAnimal(animalData: UpdateAnimalDto): Promise<AnimalEntity | null>;
    deleteAnimal(animalData: DeleteAnimalDto): Promise<any>;
    getAniaml(animalData: GetAnimalDto): Promise<void>;
    getListAniaml(animalData: GetListAniamlDto): Promise<any[]>;
}
