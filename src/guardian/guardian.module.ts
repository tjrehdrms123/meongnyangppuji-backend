import { Module } from '@nestjs/common';
import { GuardianController } from './guardian.controller';
import { GuardianService } from './guardian.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuardianEntity } from './guardian.entity';
import { GuardianRepository } from './guardian.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([GuardianEntity]),
  ],
  controllers: [GuardianController],
  providers: [GuardianService, GuardianRepository],
  exports: [GuardianRepository]
})
export class GuardianModule {}
