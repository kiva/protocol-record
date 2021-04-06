import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Record } from '../db/entity/record';
import { Repository } from 'typeorm';
import { CreateRecordDto } from './dto/create.record.dto';

/**
 * The Root Application Service
 */
@Injectable()
export class RecordService {

  constructor(
    @InjectRepository(Record)
    private readonly recordRepo: Repository<Record>
  ) {}

  public async getRecords(): Promise<Record[]> {
    // TODO: implement GraphQL functionality here
    return []
  }

  public async createRecord(dto: CreateRecordDto): Promise<Record> {
    const newRecord = new Record();
    // TODO: transcribe all fields to newRecord (filter the entityData for large objects and store them in large object storage)
    return this.recordRepo.save(newRecord);
  }

  public async updateRecord(id: string, dto: CreateRecordDto): Promise<Record> {
    const newRecord = new Record();
    // TODO: transcribe all fields to newRecord
    // TODO: change save to update
    this.recordRepo.update(id, newRecord);
    // TODO: confirm the update is successful and return the updated object to the frontend
    return null
  }

}
