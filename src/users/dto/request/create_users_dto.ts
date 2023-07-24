import { PickType } from '@nestjs/swagger'
import { GuardianEntity } from 'src/guardian/entities/guardian.entity'
import { UsersDto } from '../user.dto'

export class CreateUsersDto extends PickType(UsersDto, ['user_id','consent_check','privacy_policy_check','guardian_id'] as const) {
  user_id: string
  consent_check: boolean
  privacy_policy_check: boolean
  password: string
  guardian_id: GuardianEntity
}