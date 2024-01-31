import { PickType } from '@nestjs/swagger'
import { GuardianEntity } from 'src/guardian/guardian.entity'
import { UsersDto } from '../user.dto'
import { IsNotEmpty, IsString } from 'class-validator'

export class GetUsersDto extends PickType(UsersDto, ['user_id'] as const) {
  user_id: string
}