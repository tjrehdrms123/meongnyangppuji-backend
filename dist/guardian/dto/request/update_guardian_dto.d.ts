import { GuardianEntity } from 'src/guardian/entities/guardian.entity';
declare const UpdateGuardianDto_base: import("@nestjs/common").Type<Pick<GuardianEntity, "name" | "phone_number">>;
export declare class UpdateGuardianDto extends UpdateGuardianDto_base {
    id: string;
    name: string;
    phone_number: string;
}
export {};
