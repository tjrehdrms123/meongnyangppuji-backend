import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalModule } from 'src/animal/animal.module';
import { AnimalRepository } from 'src/animal/infra/animal.repository';
import { GuardianModule } from 'src/guardian/guardian.module';
import { GuardianRepository } from 'src/guardian/infra/guardian.repository';
import { GuardianAnimalController } from './controller/guardian_animal.controller';
import { GuardianAnimalEntity } from './entities/guardian_animal.entity';
import { GuardianAnimalRepository } from './infra/guardian_animal.repository';
import { GuardianAnimalService } from './service/guardian_animal.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([GuardianAnimalEntity]),
    // GuardianModule,
    // AnimalModule
  ],
  controllers: [GuardianAnimalController],
  providers: [GuardianAnimalService, GuardianAnimalRepository],
  exports: [GuardianAnimalRepository]
})
export class GuardianAnimalModule {}
