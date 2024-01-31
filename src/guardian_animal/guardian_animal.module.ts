import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalModule } from 'src/animal/animal.module';
import { AnimalRepository } from 'src/animal/animal.repository';
import { GuardianModule } from 'src/guardian/guardian.module';
import { GuardianRepository } from 'src/guardian/guardian.repository';
import { GuardianAnimalController } from './guardian_animal.controller';
import { GuardianAnimalEntity } from './guardian_animal.entity';
import { GuardianAnimalRepository } from './guardian_animal.repository';
import { GuardianAnimalService } from './guardian_animal.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([GuardianAnimalEntity]),
    GuardianModule,
    AnimalModule
  ],
  controllers: [GuardianAnimalController],
  providers: [GuardianAnimalService, GuardianAnimalRepository],
  exports: [GuardianAnimalRepository]
})
export class GuardianAnimalModule {}
