import { ApiProperty, PartialType } from '@nestjs/swagger'
import { GuardianEntity } from '../entities/guardian.entity'

export class GuardianDto extends PartialType(GuardianEntity) {
    name: string
    phone_number: string
}
