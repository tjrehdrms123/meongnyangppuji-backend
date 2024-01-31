import { PickType } from '@nestjs/swagger'
import { GuardianEntity } from 'src/guardian/guardian.entity'
import { UsersDto } from '../user.dto'
import { IsNotEmpty, IsString } from 'class-validator'

export class CreateUsersDto extends PickType(UsersDto, ['user_id','consent_check','privacy_policy_check'] as const) {
  user_id: string
  consent_check: boolean
  privacy_policy_check: boolean
  @IsNotEmpty({ message: '비밀번호를 작성해주세요.' })
  password: string
  // guardian_id: GuardianEntity
}