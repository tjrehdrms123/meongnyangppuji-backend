import { Injectable, Logger } from '@nestjs/common';
import { GuardianRepository } from '../infra/guardian.repository';
import { UpdateGuardianDto } from '../dto/request/update_guardian_dto';
import { CreateGuardianDto } from '../dto/request/create_guardian_dto';

@Injectable()
export class GuardianService {
  private readonly logger = new Logger(GuardianService.name);
  constructor(
    private readonly guardianRepository: GuardianRepository,
  ) {}

  async createGuardian(guardianData: CreateGuardianDto) {
    return await this.guardianRepository.createGuardian(guardianData);
  }

  async updateGuardian(guardianData: UpdateGuardianDto) {
    return await this.guardianRepository.updateGuardian(guardianData);
  }
}
