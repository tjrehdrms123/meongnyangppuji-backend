import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateColumnCardOption1707201647552 implements MigrationInterface {
    name = 'UpdateColumnCardOption1707201647552'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`card\` DROP COLUMN \`option\``);
        await queryRunner.query(`ALTER TABLE \`card\` ADD \`option\` varchar(255) NOT NULL COMMENT '배경 레이아웃 (0: 기본, 1: 옵션1, 2: 옵션2...)'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`card\` DROP COLUMN \`option\``);
        await queryRunner.query(`ALTER TABLE \`card\` ADD \`option\` int NOT NULL COMMENT '배경 레이아웃 (0: 기본, 1: 옵션1, 2: 옵션2...)'`);
    }

}
