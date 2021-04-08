import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { OrmConfig } from '../ormconfig';
import { CredentialModule } from '../credential/credential.module';

@Module({
  imports: [
    CredentialModule,
    OrmConfig(),
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
