import {MigrationInterface, QueryRunner} from "typeorm";

export class FirstMigration1636584092430 implements MigrationInterface {
    name = 'FirstMigration1636584092430'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "fullName" character varying(60) NOT NULL, "age" integer, "isActive" boolean NOT NULL DEFAULT false, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "question" ("id" SERIAL NOT NULL, "title" character varying(70) NOT NULL, "description" character varying(100), "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "answer" ("id" SERIAL NOT NULL, "description" character varying(250), "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "questionId" integer, CONSTRAINT "PK_9232db17b63fb1e94f97e5c224f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "answer_upvotes_user" ("answerId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_a4b291ed133c48788fc1a435493" PRIMARY KEY ("answerId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_dec462a0ff86f003b44e8447bb" ON "answer_upvotes_user" ("answerId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a079970f4e103d4aab65cdc738" ON "answer_upvotes_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "question" ADD CONSTRAINT "FK_80f29cc01d0bd1644e389cc13be" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer" ADD CONSTRAINT "FK_5a26907efcd78a856c8af5829e6" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer" ADD CONSTRAINT "FK_a4013f10cd6924793fbd5f0d637" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer_upvotes_user" ADD CONSTRAINT "FK_dec462a0ff86f003b44e8447bbf" FOREIGN KEY ("answerId") REFERENCES "answer"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "answer_upvotes_user" ADD CONSTRAINT "FK_a079970f4e103d4aab65cdc7389" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answer_upvotes_user" DROP CONSTRAINT "FK_a079970f4e103d4aab65cdc7389"`);
        await queryRunner.query(`ALTER TABLE "answer_upvotes_user" DROP CONSTRAINT "FK_dec462a0ff86f003b44e8447bbf"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP CONSTRAINT "FK_a4013f10cd6924793fbd5f0d637"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP CONSTRAINT "FK_5a26907efcd78a856c8af5829e6"`);
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "FK_80f29cc01d0bd1644e389cc13be"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a079970f4e103d4aab65cdc738"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_dec462a0ff86f003b44e8447bb"`);
        await queryRunner.query(`DROP TABLE "answer_upvotes_user"`);
        await queryRunner.query(`DROP TABLE "answer"`);
        await queryRunner.query(`DROP TABLE "question"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
