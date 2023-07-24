import { OmitType } from '@nestjs/swagger'
import { UsersEntity } from '../entities/users.entity'

export class UsersDto extends OmitType(UsersEntity, ['password'] as const) {}
