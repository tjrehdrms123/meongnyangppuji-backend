import { Repository } from 'typeorm';
import { GuardianAnimalEntity } from './guardian_animal.entity';
import { CreateGuardianAnimalDto } from './dto/request/create_guardian_animal_dto';
import { FindGuardianAnimalDto } from './dto/request/find_guardian_dto';
export declare class GuardianAnimalRepository {
    private readonly GuardianAnimalRepository;
    constructor(GuardianAnimalRepository: Repository<GuardianAnimalEntity>);
    createGuardian(GuardianAnimalData: CreateGuardianAnimalDto): Promise<GuardianAnimalEntity | null>;
    getByIdGuardianAnimal(GuardianAnimalData: FindGuardianAnimalDto): Promise<GuardianAnimalEntity | null>;
}
