import { MigrationInterface, QueryRunner } from "typeorm";
export declare class InitSchema1703558573380 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
