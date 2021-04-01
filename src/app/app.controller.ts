import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Record } from '../db/entity/record';
import { CreateRecordDto } from './dto/create.record.dto';

/**
 * Base route is just for various health check endpoints
 */
@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get('ping')
  ping(): string {
    return 'pong';
  }

  @Get('record/:name')
  getRecord(@Param('name') name: string): Promise<Record> {
    return this.appService.getRecord(name);
  }

  @Post('record')
  createRecord(@Body() createRecordDto: CreateRecordDto): Promise<Record> {
    return this.appService.createRecord(createRecordDto);
  }
}
