import { UsersDto } from '../user.dto';
declare const LoginDto_base: import("@nestjs/common").Type<Pick<UsersDto, "user_id">>;
export declare class LoginDto extends LoginDto_base {
    user_id: string;
    password: string;
}
export {};
