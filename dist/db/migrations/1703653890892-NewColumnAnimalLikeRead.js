"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewColumnAnimalLikeRead1703653890892 = void 0;
class NewColumnAnimalLikeRead1703653890892 {
    constructor() {
        this.name = 'NewColumnAnimalLikeRead1703653890892';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`animal\` ADD \`like\` int NOT NULL COMMENT '좋아요' DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD \`read\` int NOT NULL COMMENT '조회수' DEFAULT '0'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`animal\` DROP COLUMN \`read\``);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP COLUMN \`like\``);
    }
}
exports.NewColumnAnimalLikeRead1703653890892 = NewColumnAnimalLikeRead1703653890892;
//# sourceMappingURL=1703653890892-NewColumnAnimalLikeRead.js.map