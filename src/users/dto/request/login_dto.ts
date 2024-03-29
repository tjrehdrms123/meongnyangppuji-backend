import { PickType } from '@nestjs/swagger'
import { GuardianEntity } from 'src/guardian/guardian.entity'
import { UsersDto } from '../user.dto'
import { IsNotEmpty, IsString } from 'class-validator'

export class LoginDto extends PickType(UsersDto, ['user_id'] as const) {
  user_id: string
  @IsNotEmpty({ message: '비밀번호를 작성해주세요.' })
  password: string
}