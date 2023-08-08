import { PickType } from '@nestjs/swagger'
import { GuardianEntity } from 'src/guardian/entities/guardian.entity'

export class DeleteGuardianDto extends PickType(GuardianEntity , ['id'] as const) {
    id: string
}