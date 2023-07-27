import { ApiProperty, PartialType, PickType } from '@nestjs/swagger'
import { GuardianEntity } from 'src/guardian/entities/guardian.entity'

export class FindGuardianDto extends PickType(GuardianEntity , ['id'] as const) {
    id: string
}