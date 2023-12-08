import { GuardianRepository } from '../infra/guardian.repository';
import { UpdateGuardianDto } from '../dto/request/update_guardian_dto';
import { CreateGuardianDto } from '../dto/request/create_guardian_dto';
import { DeleteGuardianDto } from '../dto/request/delete_guardian_dto';
import { GuardianEntity } from '../entities/guardian.entity';
import { FindGuardianDto } from '../dto/request/find_guardian_dto';
export declare class GuardianService {
    private readonly guardianRepository;
    private readonly logger;
    constructor(guardianRepository: GuardianRepository);
    getGuardian(guardianData: FindGuardianDto): Promise<GuardianEntity | null>;
    createGuardian(guardianData: CreateGuardianDto): Promise<GuardianEntity | null>;
    updateGuardian(guardianData: UpdateGuardianDto): Promise<GuardianEntity | null>;
    deleteGuardian(guardianData: DeleteGuardianDto): Promise<any>;
}
