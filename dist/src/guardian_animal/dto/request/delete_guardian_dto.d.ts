import { GuardianEntity } from 'src/guardian/entities/guardian.entity';
declare const DeleteGuardianDto_base: import("@nestjs/common").Type<Pick<GuardianEntity, "id">>;
export declare class DeleteGuardianDto extends DeleteGuardianDto_base {
    id: string;
}
export {};
