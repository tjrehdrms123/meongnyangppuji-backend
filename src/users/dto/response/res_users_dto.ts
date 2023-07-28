import { ApiProperty, OmitType } from '@nestjs/swagger'
import { UsersEntity } from 'src/users/entities/users.entity';

// export class ResAnimalTypeDto extends OmitType(UsersEntity , [] as const){}

export class ResUsersOmitPasswordDto extends OmitType(UsersEntity , ['password'] as const){}