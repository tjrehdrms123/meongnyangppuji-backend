import { ApiProperty, PartialType, PickType } from '@nestjs/swagger'
import { GuardianEntity } from 'src/guardian/entities/guardian.entity'

export class UpdateGuardianDto extends PickType(GuardianEntity , ['name','phone_number'] as const) {
    id: string
    name: string
    phone_number: string
}