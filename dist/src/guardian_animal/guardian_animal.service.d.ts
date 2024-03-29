import { GuardianAnimalEntity } from './guardian_animal.entity';
import { GuardianAnimalRepository } from './guardian_animal.repository';
import { CreateGuardianAnimalDto } from './dto/request/create_guardian_animal_dto';
import { GuardianRepository } from 'src/guardian/guardian.repository';
import { AnimalRepository } from 'src/animal/animal.repository';
import { FindGuardianAnimalDto } from './dto/request/find_guardian_dto';
export declare class GuardianAnimalService {
    private readonly guardianAnimalRepository;
    private readonly guardianRepository;
    private readonly animalRepository;
    private readonly logger;
    constructor(guardianAnimalRepository: GuardianAnimalRepository, guardianRepository: GuardianRepository, animalRepository: AnimalRepository);
    createGuardian(GuardianAnimalData: CreateGuardianAnimalDto): Promise<GuardianAnimalEntity | null>;
    getByIdGuardianAnimal(GuardianAnimalData: FindGuardianAnimalDto): Promise<GuardianAnimalEntity>;
}
