import { UsersEntity } from 'src/users/entities/users.entity';
declare const ResUsersTypeDto_base: import("@nestjs/common").Type<Omit<UsersEntity, never>>;
export declare class ResUsersTypeDto extends ResUsersTypeDto_base {
}
declare const ResUsersOmitPasswordDto_base: import("@nestjs/common").Type<Omit<UsersEntity, "password">>;
export declare class ResUsersOmitPasswordDto extends ResUsersOmitPasswordDto_base {
}
export {};
