import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { AppService } from './app/app.service';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  await AppService.setup(app);
  await app.listen(3003);
};

bootstrap().catch(e => {
    Logger.error(e.message);
});
