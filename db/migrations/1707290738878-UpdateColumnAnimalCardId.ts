import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateColumnAnimalCardId1707290738878 implements MigrationInterface {
    name = 'UpdateColumnAnimalCardId1707290738878'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`REL_00a33d0942f123abb5f5b790d8\` ON \`animal\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_00a33d0942f123abb5f5b790d8\` ON \`animal\` (\`card_id\`)`);
    }

}
