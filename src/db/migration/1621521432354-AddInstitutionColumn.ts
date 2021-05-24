import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddIssuanceColumn1621521432354 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE credential ADD COLUMN institution;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE credential DROP COLUMN institution;
        `);
    }

}
