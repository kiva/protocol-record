import { Get, Controller } from '@nestjs/common';

/**
 * Base route is just for various health check endpoints
 */
@Controller()
export class AppController {

  @Get()
  base(): string {
      return process.env.SERVICE;
  }

  @Get('ping')
  ping(): string {
      return 'pong';
  }

  @Get('healthz')
  healthz(): string {
      return 'OK';
  }

}
