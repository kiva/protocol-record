import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePersonTable1611685474343 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS person (
                name VARCHAR(100) NOT NULL PRIMARY KEY,
                age integer
            );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS person;
        `);
    }

}
