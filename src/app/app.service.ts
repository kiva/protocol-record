import { Injectable, INestApplication, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from '../db/entity/person';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create.person.dto';

/**
 * The Root Application Service
 */
@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Person)
    private readonly personRepo: Repository<Person>
  ) {}

  /**
   * Sets up app in a way that can be used by main.ts and e2e tests
   */
  public static async setup(app: INestApplication): Promise<void> {
    const logger = new Logger();
    app.useLogger(logger);
  }

  public async getPerson(name: string): Promise<Person> {
    const results = await this.personRepo.find({name});
    if (results.length === 0) {
      return Promise.reject(`Could not find a person named ${name}`);
    } else {
      return results[0];
    }
  }

  public async createPerson(dto: CreatePersonDto): Promise<Person> {
    const newPerson = new Person();
    newPerson.name = dto.name;
    newPerson.age = dto.age;
    return this.personRepo.save(newPerson);
  }
}
