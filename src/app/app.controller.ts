import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Person } from '../db/entity/person';
import { CreatePersonDto } from './dto/create.person.dto';

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

  @Get('person/:name')
  getPerson(@Param('name') name: string): Promise<Person> {
    return this.appService.getPerson(name);
  }

  @Post('person')
  createPerson(@Body() createPersonDto: CreatePersonDto): Promise<Person> {
    return this.appService.createPerson(createPersonDto);
  }
}
