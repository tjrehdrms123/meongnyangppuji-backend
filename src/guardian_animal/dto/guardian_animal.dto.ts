import { ApiProperty, PartialType } from '@nestjs/swagger'
import { GuardianAnimalEntity } from '../guardian_animal.entity'

export class GuardianDto extends PartialType(GuardianAnimalEntity) {}
