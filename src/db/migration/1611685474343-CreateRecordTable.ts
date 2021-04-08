import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCredentialTable1611685474343 implements MigrationInterface {

    // TODO: add NOT NULL to column def where appropriate

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS credential (
                id SERIAL PRIMARY KEY,
                entityData jsonb,
                connection_id VARCHAR,
                schema_id VARCHAR,
                credential_definition_id VARCHAR,
                credential_exchange_id VARCHAR,
                state VARCHAR,
                acapy_created_at TIMESTAMPTZ,
                thread_id VARCHAR,
                acapy_updated_at TIMESTAMPTZ,
                revocation_id VARCHAR,
                credential_id VARCHAR,
                revoc_reg_id VARCHAR,
                is_revoked boolean,
                revocation_reason VARCHAR,
                revocation_date TIMESTAMPTZ
            );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS credential;
        `);
    }

}
