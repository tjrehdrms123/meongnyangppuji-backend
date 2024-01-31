import { GuardianEntity } from "src/guardian/guardian.entity";
declare const ResGuardianDto_base: import("@nestjs/common").Type<Omit<GuardianEntity, never>>;
export declare class ResGuardianDto extends ResGuardianDto_base {
}
export declare const ResGuardianMetaData: {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: any;
    name: string;
    phone_number: string;
};
export declare class ResGuardianRowDto {
    row: number;
}
export {};
