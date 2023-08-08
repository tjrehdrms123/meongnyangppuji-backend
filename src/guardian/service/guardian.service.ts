import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { GuardianRepository } from '../infra/guardian.repository';
import { UpdateGuardianDto } from '../dto/request/update_guardian_dto';
import { CreateGuardianDto } from '../dto/request/create_guardian_dto';
import { DeleteGuardianDto } from '../dto/request/delete_guardian_dto';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { GuardianEntity } from '../entities/guardian.entity';

@Injectable()
export class GuardianService {
  private readonly logger = new Logger(GuardianService.name);
  constructor(
    private readonly guardianRepository: GuardianRepository,
  ) {}

  async createGuardian(guardianData: CreateGuardianDto): Promise<GuardianEntity | null> {
    return await this.guardianRepository.createGuardian(guardianData);
  }

  async updateGuardian(guardianData: UpdateGuardianDto): Promise<GuardianEntity | null> {
    const { id } = guardianData;

    // Exception: 업데이트 하려고 하는 Row가 없을시
    const exceptionExitsGuardian = await this.guardianRepository.isExitsGuardian(id);
    if (!exceptionExitsGuardian) {
      throw new BadRequestException(ErrorDefine['ERROR-2000']);
    }
    
    return await this.guardianRepository.updateGuardian(guardianData);
  }

  async deleteGuardian(guardianData: DeleteGuardianDto): Promise<any> {
    const { id } = guardianData;

    // Exception: 삭제하려고하는 Row가 없을시
    const exceptionExitsGuardian = await this.guardianRepository.isExitsGuardian(id);
    if (!exceptionExitsGuardian) {
      throw new BadRequestException(ErrorDefine['ERROR-2000']);
    }

    return await this.guardianRepository.deleteGuardian(guardianData);
  }
}
