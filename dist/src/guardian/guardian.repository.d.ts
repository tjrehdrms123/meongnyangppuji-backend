import { Repository } from 'typeorm';
import { GuardianEntity } from './guardian.entity';
import { CreateGuardianDto } from './dto/request/create_guardian_dto';
import { UpdateGuardianDto } from './dto/request/update_guardian_dto';
import { FindGuardianDto } from './dto/request/find_guardian_dto';
import { DeleteGuardianDto } from './dto/request/delete_guardian_dto';
export declare class GuardianRepository {
    private readonly GuardianRepository;
    constructor(GuardianRepository: Repository<GuardianEntity>);
    getGuardian(GuardianData: FindGuardianDto): Promise<GuardianEntity | null>;
    createGuardian(GuardianData: CreateGuardianDto): Promise<GuardianEntity | null>;
    updateGuardian(GuardianData: UpdateGuardianDto): Promise<GuardianEntity | null>;
    isExitsGuardian(guardianId: any): Promise<GuardianEntity | null>;
    deleteGuardian(GuardianData: DeleteGuardianDto): Promise<any>;
}
