import {MigrationInterface, QueryRunner} from "typeorm";

export class fixUserEntity1636731957766 implements MigrationInterface {
    name = 'fixUserEntity1636731957766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answer" ALTER COLUMN "description" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answer" ALTER COLUMN "description" DROP NOT NULL`);
    }

}
