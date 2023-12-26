import { GuardianEntity } from 'src/guardian/entities/guardian.entity';
declare const FindGuardianAnimalDto_base: import("@nestjs/common").Type<Pick<GuardianEntity, "id">>;
export declare class FindGuardianAnimalDto extends FindGuardianAnimalDto_base {
    id: string;
}
export {};
