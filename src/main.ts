import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { AppService } from './app/app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await AppService.setup(app);
  await app.listen(3003);
}
bootstrap();
