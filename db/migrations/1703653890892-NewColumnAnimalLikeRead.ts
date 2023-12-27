import { MigrationInterface, QueryRunner } from "typeorm";

export class NewColumnAnimalLikeRead1703653890892 implements MigrationInterface {
    name = 'NewColumnAnimalLikeRead1703653890892'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`animal\` ADD \`like\` int NOT NULL COMMENT '좋아요' DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD \`read\` int NOT NULL COMMENT '조회수' DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`animal\` DROP COLUMN \`read\``);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP COLUMN \`like\``);
    }

}
