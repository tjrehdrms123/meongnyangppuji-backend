import { ApiProperty, PartialType } from '@nestjs/swagger'
import { GuardianAnimalEntity } from '../entities/guardian_animal.entity'

export class GuardianDto extends PartialType(GuardianAnimalEntity) {}
