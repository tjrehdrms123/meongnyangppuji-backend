import { AnimalTypeEntity } from '../../animal_type.entity';
declare const ResAnimalTypeDto_base: import("@nestjs/common").Type<Omit<AnimalTypeEntity, never>>;
export declare class ResAnimalTypeDto extends ResAnimalTypeDto_base {
}
declare const ResAnimalTypeOmitNameDto_base: import("@nestjs/common").Type<Omit<AnimalTypeEntity, "detail_name">>;
export declare class ResAnimalTypeOmitNameDto extends ResAnimalTypeOmitNameDto_base {
}
declare const ResAnimalTypeOmitDetailNameDto_base: import("@nestjs/common").Type<Omit<AnimalTypeEntity, "name">>;
export declare class ResAnimalTypeOmitDetailNameDto extends ResAnimalTypeOmitDetailNameDto_base {
}
export declare class ResAnimalTypeNameDto {
    name: string;
}
export declare class ResAnimalTypeDetailNameDto {
    detail_name: string;
}
export declare class ResAnimalTypeRowDto {
    row: number;
}
export declare class ResAnimalTypeManyRowDto {
    row: number;
}
export declare const ResAnimalTypeMetaData: {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: any;
    name: string;
    detail_name: string;
};
export {};
