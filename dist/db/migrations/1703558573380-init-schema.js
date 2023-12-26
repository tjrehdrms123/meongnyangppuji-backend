"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitSchema1703558573380 = void 0;
class InitSchema1703558573380 {
    constructor() {
        this.name = 'InitSchema1703558573380';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`animal_type\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` timestamp(6) NULL, \`name\` varchar(30) CHARACTER SET "utf8mb4" NOT NULL COMMENT '이름(강아지,고양이)', \`detail_name\` varchar(30) CHARACTER SET "utf8mb4" NOT NULL COMMENT '상세 이름 (푸들, 진돗개, 코리안 숏헤어...)', UNIQUE INDEX \`IDX_9cde3710dbe9aa5dbbe796bd29\` (\`detail_name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`qr\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` timestamp(6) NULL, \`qr_issuance\` tinyint NOT NULL COMMENT 'QR 발행 여부 (0: 미발행, 1: 발행)', \`qr_use\` tinyint NOT NULL COMMENT 'QR 사용 여부 (0: 미사용, 1: 사용)', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`uploads\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` timestamp(6) NULL, \`img\` varchar(255) NOT NULL COMMENT '원본 이미지', \`img_crop\` varchar(255) NULL COMMENT '크롭 이미지', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`card\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` timestamp(6) NULL, \`background_color\` varchar(255) NOT NULL COMMENT '등록증 배경 색상', \`option\` int NOT NULL COMMENT '배경 레이아웃 (0: 기본, 1: 옵션1, 2: 옵션2...)', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`animal\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` timestamp(6) NULL, \`name\` varchar(255) CHARACTER SET "utf8mb4" NOT NULL COMMENT '이름', \`introduction\` varchar(255) CHARACTER SET "utf8mb4" NOT NULL COMMENT '소개', \`age\` int NOT NULL COMMENT '나이', \`sex\` tinyint NOT NULL COMMENT '성별', \`uploads_id\` varchar(36) NULL, \`animal_type_id\` varchar(36) NULL, \`qr_id\` varchar(36) NULL, \`card_id\` varchar(36) NULL, UNIQUE INDEX \`REL_802786a5b9968d9ffedc81496a\` (\`uploads_id\`), UNIQUE INDEX \`REL_d0a8151b2b6d5b52f6024a18c9\` (\`qr_id\`), UNIQUE INDEX \`REL_00a33d0942f123abb5f5b790d8\` (\`card_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` timestamp(6) NULL, \`user_id\` varchar(10) CHARACTER SET "utf8mb4" NOT NULL COMMENT '유저 아이디', \`password\` varchar(255) CHARACTER SET "utf8mb4" NOT NULL COMMENT '패스워드', \`role\` enum ('User', 'Admin') NOT NULL DEFAULT 'User', \`consent_check\` tinyint NOT NULL COMMENT '서비스이용약관', \`privacy_policy_check\` varchar(255) NOT NULL COMMENT '개인정보처리방침', UNIQUE INDEX \`IDX_96aac72f1574b88752e9fb0008\` (\`user_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`guardian\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` timestamp(6) NULL, \`name\` varchar(10) CHARACTER SET "utf8mb4" NOT NULL COMMENT '보호자 이름', \`phone_number\` varchar(30) CHARACTER SET "utf8mb4" NOT NULL COMMENT '보호자 전화번호', \`users_id\` varchar(36) NULL, UNIQUE INDEX \`REL_cca83c2493b2821c7d650219a3\` (\`users_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`guardian_animal\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` timestamp(6) NULL, \`guardian_id\` varchar(36) NULL, \`animal_id\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD CONSTRAINT \`FK_802786a5b9968d9ffedc81496af\` FOREIGN KEY (\`uploads_id\`) REFERENCES \`uploads\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD CONSTRAINT \`FK_e8d69da698bffc67a5399dc765b\` FOREIGN KEY (\`animal_type_id\`) REFERENCES \`animal_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD CONSTRAINT \`FK_d0a8151b2b6d5b52f6024a18c96\` FOREIGN KEY (\`qr_id\`) REFERENCES \`qr\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`animal\` ADD CONSTRAINT \`FK_00a33d0942f123abb5f5b790d81\` FOREIGN KEY (\`card_id\`) REFERENCES \`card\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`guardian\` ADD CONSTRAINT \`FK_cca83c2493b2821c7d650219a3c\` FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`guardian_animal\` ADD CONSTRAINT \`FK_22f738c982c4b349ed272d8ace3\` FOREIGN KEY (\`guardian_id\`) REFERENCES \`guardian\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`guardian_animal\` ADD CONSTRAINT \`FK_ed5cb64d4320fcb41350907da64\` FOREIGN KEY (\`animal_id\`) REFERENCES \`animal\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`guardian_animal\` DROP FOREIGN KEY \`FK_ed5cb64d4320fcb41350907da64\``);
        await queryRunner.query(`ALTER TABLE \`guardian_animal\` DROP FOREIGN KEY \`FK_22f738c982c4b349ed272d8ace3\``);
        await queryRunner.query(`ALTER TABLE \`guardian\` DROP FOREIGN KEY \`FK_cca83c2493b2821c7d650219a3c\``);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP FOREIGN KEY \`FK_00a33d0942f123abb5f5b790d81\``);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP FOREIGN KEY \`FK_d0a8151b2b6d5b52f6024a18c96\``);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP FOREIGN KEY \`FK_e8d69da698bffc67a5399dc765b\``);
        await queryRunner.query(`ALTER TABLE \`animal\` DROP FOREIGN KEY \`FK_802786a5b9968d9ffedc81496af\``);
        await queryRunner.query(`DROP TABLE \`guardian_animal\``);
        await queryRunner.query(`DROP INDEX \`REL_cca83c2493b2821c7d650219a3\` ON \`guardian\``);
        await queryRunner.query(`DROP TABLE \`guardian\``);
        await queryRunner.query(`DROP INDEX \`IDX_96aac72f1574b88752e9fb0008\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP INDEX \`REL_00a33d0942f123abb5f5b790d8\` ON \`animal\``);
        await queryRunner.query(`DROP INDEX \`REL_d0a8151b2b6d5b52f6024a18c9\` ON \`animal\``);
        await queryRunner.query(`DROP INDEX \`REL_802786a5b9968d9ffedc81496a\` ON \`animal\``);
        await queryRunner.query(`DROP TABLE \`animal\``);
        await queryRunner.query(`DROP TABLE \`card\``);
        await queryRunner.query(`DROP TABLE \`uploads\``);
        await queryRunner.query(`DROP TABLE \`qr\``);
        await queryRunner.query(`DROP INDEX \`IDX_9cde3710dbe9aa5dbbe796bd29\` ON \`animal_type\``);
        await queryRunner.query(`DROP TABLE \`animal_type\``);
    }
}
exports.InitSchema1703558573380 = InitSchema1703558573380;
//# sourceMappingURL=1703558573380-init-schema.js.map