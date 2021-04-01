import { Injectable, INestApplication, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Record } from '../db/entity/record';
import { Repository } from 'typeorm';
import { CreateRecordDto } from './dto/create.record.dto';

/**
 * The Root Application Service
 */
@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Record)
    private readonly recordRepo: Repository<Record>
  ) {}

  /**
   * Sets up app in a way that can be used by main.ts and e2e tests
   */
  public static async setup(app: INestApplication): Promise<void> {
    const logger = new Logger();
    app.useLogger(logger);
  }

  public async getRecord(name: string): Promise<Record> {
    const results = await this.recordRepo.find({name});
    if (results.length === 0) {
      return Promise.reject(`Could not find a record named ${name}`);
    } else {
      return results[0];
    }
  }

  public async createRecord(dto: CreateRecordDto): Promise<Record> {
    const newRecord = new Record();
    newRecord.name = dto.name;
    newRecord.age = dto.age;
    return this.recordRepo.save(newRecord);
  }
}
