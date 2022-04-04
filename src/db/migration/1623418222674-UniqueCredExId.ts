import {MigrationInterface, QueryRunner} from 'typeorm';

export class UniqueCredExId1623418222674 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE credential ADD CONSTRAINT uniquecredexid UNIQUE (credential_exchange_id);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE credential DROP CONSTRAINT uniquecredexid;
        `);
    }

}
