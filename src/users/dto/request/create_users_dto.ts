import { PickType } from '@nestjs/swagger'
import { UsersDto } from '../user.dto'

export class CreateUsersDTO extends PickType(UsersDto, ['user_id','consent_check','privacy_policy_check'] as const) {
  user_id: string
  consent_check: boolean
  privacy_policy_check: boolean
  password: string
  guardian_id: string
}