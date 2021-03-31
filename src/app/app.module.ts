import { Module } from '@nestjs/common';
import { OrmConfig } from '../ormconfig';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from '../db/entity/person';

@Module({
  imports: [
    TypeOrmModule.forFeature([Person]),
    OrmConfig()
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
