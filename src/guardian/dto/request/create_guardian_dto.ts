import { PickType } from '@nestjs/swagger'
import { GuardianEntity } from 'src/guardian/entities/guardian.entity'
import { UsersEntity } from 'src/users/entities/users.entity'

export class CreateGuardianDto extends PickType(GuardianEntity , ['name','phone_number','users_id'] as const) {
    name: string
    phone_number: string
    users_id: UsersEntity
}