import { Get, Controller } from '@nestjs/common';

/**
 * Base route is just for various health check endpoints
 */
@Controller()
export class AppController {

  constructor() {}

  @Get('healthz')
  ping(): string {
    return 'OK';
  }

}
