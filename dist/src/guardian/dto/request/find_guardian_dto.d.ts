import { GuardianEntity } from 'src/guardian/guardian.entity';
declare const FindGuardianDto_base: import("@nestjs/common").Type<Pick<GuardianEntity, "id">>;
export declare class FindGuardianDto extends FindGuardianDto_base {
    id: string;
}
export {};
