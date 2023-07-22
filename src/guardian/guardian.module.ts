import { Module } from '@nestjs/common';
import { GuardianController } from './controller/guardian.controller';
import { GuardianService } from './service/guardian.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuardianEntity } from './entities/guardian.entity';
import { GuardianRepository } from './infra/guardian.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([GuardianEntity]),
  ],
  controllers: [GuardianController],
  providers: [GuardianService, GuardianRepository],
  exports: [GuardianRepository]
})
export class GuardianModule {}
