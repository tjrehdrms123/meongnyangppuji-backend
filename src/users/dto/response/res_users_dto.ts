import { ApiProperty, OmitType } from '@nestjs/swagger'
import { UsersEntity } from 'src/users/users.entity';

export class ResUsersTypeDto extends OmitType(UsersEntity , [] as const){}

export class ResUsersOmitPasswordDto extends OmitType(UsersEntity , ['password'] as const){}