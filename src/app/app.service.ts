import { Injectable, INestApplication, Logger } from '@nestjs/common';

/**
 * The Root Application Service
 */
@Injectable()
export class AppService {

  constructor() {}

  /**
   * Sets up app in a way that can be used by main.ts and e2e tests
   */
  public static async setup(app: INestApplication): Promise<void> {
    const logger = new Logger();
    app.useLogger(logger);
  }

}
