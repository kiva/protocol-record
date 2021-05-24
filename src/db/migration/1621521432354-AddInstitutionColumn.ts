import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddInstitutionColumn1621521432354 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE credential ADD COLUMN institution VARCHAR;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE credential DROP COLUMN institution;
        `);
    }

}
