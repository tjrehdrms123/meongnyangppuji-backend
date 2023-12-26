import { GuardianAnimalService } from '../service/guardian_animal.service';
import { CreateGuardianAnimalDto } from '../dto/request/create_guardian_animal_dto';
import { FindGuardianAnimalDto } from '../dto/request/find_guardian_dto';
export declare class GuardianAnimalController {
    private readonly guardianAnimalService;
    constructor(guardianAnimalService: GuardianAnimalService);
    createGuardian(guardianAnimalData: CreateGuardianAnimalDto): Promise<import("../entities/guardian_animal.entity").GuardianAnimalEntity>;
    getByIdGuardianAnimal(guardianAnimalData: FindGuardianAnimalDto): Promise<import("../entities/guardian_animal.entity").GuardianAnimalEntity>;
}
