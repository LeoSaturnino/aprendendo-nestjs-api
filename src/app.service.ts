import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHello2(nome: string): string {
    return `Hello ${nome}!`;
  }
}
