import { Module } from '@nestjs/common';
import { RecordService } from './record.service';
import { RecordController } from './record.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Record } from '../db/entity/record';

@Module({
  imports: [
    TypeOrmModule.forFeature([Record]),
  ],
  controllers: [RecordController],
  providers: [RecordService]
})
export class RecordModule {}
