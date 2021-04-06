import { Module } from '@nestjs/common';
import { OrmConfig } from '../ormconfig';
import { RecordService } from './record.service';
import { RecordController } from './record.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Record } from '../db/entity/record';

@Module({
  imports: [
    TypeOrmModule.forFeature([Record]),
    OrmConfig()
  ],
  controllers: [RecordController],
  providers: [RecordService]
})
export class RecordModule {}
