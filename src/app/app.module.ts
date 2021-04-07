import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { OrmConfig } from '../ormconfig';
import { RecordModule } from '../record/record.module';

@Module({
  imports: [
    RecordModule,
    OrmConfig(),
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
