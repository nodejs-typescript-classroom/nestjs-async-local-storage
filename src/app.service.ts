import { Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';

@Injectable()
export class AppService {
  constructor(private readonly als: AsyncLocalStorage<Record<string, any>>) {}
  getHello() {
    return this.als.getStore();
  }
}
