import { UsersDto } from '../user.dto';
declare const GetUsersDto_base: import("@nestjs/common").Type<Pick<UsersDto, "user_id">>;
export declare class GetUsersDto extends GetUsersDto_base {
    user_id: string;
}
export {};
