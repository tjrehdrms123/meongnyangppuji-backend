import { GuardianService } from './guardian.service';
import { CreateGuardianDto } from './dto/request/create_guardian_dto';
import { UpdateGuardianDto } from './dto/request/update_guardian_dto';
import { DeleteGuardianDto } from './dto/request/delete_guardian_dto';
import { FindGuardianDto } from './dto/request/find_guardian_dto';
export declare class GuardianController {
    private readonly guardianService;
    constructor(guardianService: GuardianService);
    getGuardian(guardianData: FindGuardianDto): Promise<import("./guardian.entity").GuardianEntity>;
    createGuardian(guardianData: CreateGuardianDto): Promise<import("./guardian.entity").GuardianEntity>;
    updateGuardian(guardianData: UpdateGuardianDto): Promise<import("./guardian.entity").GuardianEntity>;
    deleteGuardian(guardianData: DeleteGuardianDto): Promise<any>;
}
