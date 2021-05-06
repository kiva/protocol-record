import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameEntityDataColumn1620316796632 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE credential RENAME entityData to entity_data;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE credential RENAME entity_data to entityData;
        `);
    }

}
