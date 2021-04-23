import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

export function OrmConfig(): DynamicModule {
  return TypeOrmModule.forRoot({
    type: 'postgres',
    synchronize: false,
    migrationsRun: true,
    entities: ['src/db/entity/**/*.ts', 'dist/db/entity/**/*.js'],
    migrations: ['dist/db/migration/**/*.js'],
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: 5432,
  });
}
