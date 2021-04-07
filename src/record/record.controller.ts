import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { RecordService } from './record.service';
import { Record } from '../db/entity/record';
import { CreateRecordDto } from './dto/create.record.dto';

/**
 * Base route is just for various health check endpoints
 */
@Controller('record')
export class RecordController {

  constructor(private readonly recordService: RecordService) {}

  @Get()
  getRecords(): Promise<Record[]> {
    return this.recordService.getRecords();
  }

  @Post()
  createRecord(@Body() createRecordDto: CreateRecordDto): Promise<Record> {
    return this.recordService.createRecord(createRecordDto);
  }

  @Post(':id')
  updateRecord(@Param('id') id: string, @Body() createRecordDto: CreateRecordDto): Promise<Record> {
    return this.recordService.updateRecord(id, createRecordDto);
  }

}
