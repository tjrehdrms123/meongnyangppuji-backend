import { UsersEntity } from '../entities/users.entity';
declare const UsersDto_base: import("@nestjs/common").Type<Omit<UsersEntity, "password">>;
export declare class UsersDto extends UsersDto_base {
}
export {};
