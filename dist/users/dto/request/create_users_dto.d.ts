import { UsersDto } from '../user.dto';
declare const CreateUsersDto_base: import("@nestjs/common").Type<Pick<UsersDto, "user_id" | "consent_check" | "privacy_policy_check">>;
export declare class CreateUsersDto extends CreateUsersDto_base {
    user_id: string;
    consent_check: boolean;
    privacy_policy_check: boolean;
    password: string;
}
export {};
