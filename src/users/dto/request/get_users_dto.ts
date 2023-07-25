import { PickType } from '@nestjs/swagger'
import { GuardianEntity } from 'src/guardian/entities/guardian.entity'
import { UsersDto } from '../user.dto'
import { IsNotEmpty, IsString } from 'class-validator'

export class CreateUsersDto extends PickType(UsersDto, ['user_id','guardian_id'] as const) {
  user_id: string
  guardian_id: GuardianEntity
}