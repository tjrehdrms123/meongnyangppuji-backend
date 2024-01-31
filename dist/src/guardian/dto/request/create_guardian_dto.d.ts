import { GuardianEntity } from 'src/guardian/guardian.entity';
import { UsersEntity } from 'src/users/users.entity';
declare const CreateGuardianDto_base: import("@nestjs/common").Type<Pick<GuardianEntity, "name" | "phone_number" | "users_id">>;
export declare class CreateGuardianDto extends CreateGuardianDto_base {
    name: string;
    phone_number: string;
    users_id: UsersEntity;
}
export {};
