import { PickType } from '@nestjs/swagger'
import { GuardianEntity } from 'src/guardian/entities/guardian.entity'

export class CreateGuardianDto extends PickType(GuardianEntity , ['name','phone_number'] as const) {
    name: string
    phone_number: string
}