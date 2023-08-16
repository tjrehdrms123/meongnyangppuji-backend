import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuardianAnimalController } from './controller/guardian_animal.controller';
import { GuardianAnimalEntity } from './entities/guardian_animal.entity';
import { GuardianAnimalRepository } from './infra/guardian_animal.repository';
import { GuardianAnimalService } from './service/guardian_animal.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([GuardianAnimalEntity]),
  ],
  controllers: [GuardianAnimalController],
  providers: [GuardianAnimalService, GuardianAnimalRepository],
  exports: [GuardianAnimalRepository]
})
export class GuardianAnimalModule {}
