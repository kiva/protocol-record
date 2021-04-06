import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRecordTable1611685474343 implements MigrationInterface {

    // TODO: add NOT NULL to column def where appropriate

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS record (
                id VARCHAR(100) NOT NULL PRIMARY KEY,
                entityData jsonb,
                connection_id VARCHAR(100),
                schema_id VARCHAR(100),
                credential_definition_id VARCHAR(100),
                credential_exchange_id VARCHAR(100),
                state VARCHAR(100),
                acapy_created_at VARCHAR(100),
                thread_id VARCHAR(100),
                acapy_updated_at VARCHAR(100),
                revocation_id VARCHAR(100),
                credential_id VARCHAR(100),
                revoc_reg_id VARCHAR(100),
                is_revoked boolean,
                revocation_reason VARCHAR(100),
                revocation_date VARCHAR(100)
            );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS record;
        `);
    }

}
