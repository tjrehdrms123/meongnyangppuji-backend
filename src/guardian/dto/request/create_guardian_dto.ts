import { PickType } from '@nestjs/swagger'
import { GuardianEntity } from 'src/guardian/guardian.entity'
import { UsersEntity } from 'src/users/users.entity'

export class CreateGuardianDto extends PickType(GuardianEntity , ['name','phone_number','users_id'] as const) {
    name: string
    phone_number: string
    users_id: UsersEntity
}