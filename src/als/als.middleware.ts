import { Injectable, NestMiddleware } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';

@Injectable()
export class AlsMiddleware implements NestMiddleware {
  constructor(private readonly als: AsyncLocalStorage<Record<string, any>>) {}
  use(req: any, res: any, next: () => void) {
    const store = {
      correlationKey: req.headers['x-correlation-key'],
      authentication: req.headers['authentication'],
      userId: req.headers['x-user-id'],
    };
    this.als.run(store, () => {
      next();
    });
  }
}
