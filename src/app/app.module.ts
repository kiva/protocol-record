import { Module } from '@nestjs/common';
import { OrmConfig } from '../ormconfig';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Record } from '../db/entity/record';

@Module({
  imports: [
    TypeOrmModule.forFeature([Record]),
    OrmConfig()
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
