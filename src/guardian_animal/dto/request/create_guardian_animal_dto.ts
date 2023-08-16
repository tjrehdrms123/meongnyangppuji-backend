import { PickType } from '@nestjs/swagger'
import { GuardianAnimalEntity } from 'src/guardian_animal/entities/guardian_animal.entity'

export class CreateGuardianAnimalDto extends PickType(GuardianAnimalEntity , ['guardian_id','animal_id'] as const) {}