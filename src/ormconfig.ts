import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

export function OrmConfig(): DynamicModule {
  return TypeOrmModule.forRoot({
    type: 'postgres',
    synchronize: false,
    migrationsRun: true,
    entities: ['src/db/entity/**/*.ts', 'dist/db/entity/**/*.js'],
    migrations: ['dist/db/migration/**/*.js'],
    host: 'test-db',
    username: 'dbuser',
    password: 'dbpass',
    database: 'testdb',
    port: 5432,
  });
}
