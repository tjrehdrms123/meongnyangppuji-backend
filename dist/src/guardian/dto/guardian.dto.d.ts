import { GuardianEntity } from '../entities/guardian.entity';
declare const GuardianDto_base: import("@nestjs/common").Type<Partial<GuardianEntity>>;
export declare class GuardianDto extends GuardianDto_base {
    name: string;
    phone_number: string;
}
export {};
