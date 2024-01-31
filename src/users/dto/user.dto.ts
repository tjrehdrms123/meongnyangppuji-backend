import { OmitType } from '@nestjs/swagger'
import { UsersEntity } from '../users.entity'

export class UsersDto extends OmitType(UsersEntity, ['password'] as const) {}
