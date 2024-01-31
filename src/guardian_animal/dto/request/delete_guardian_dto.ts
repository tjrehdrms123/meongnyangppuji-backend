import { PickType } from '@nestjs/swagger'
import { GuardianEntity } from 'src/guardian/guardian.entity'

export class DeleteGuardianDto extends PickType(GuardianEntity , ['id'] as const) {
    id: string
}