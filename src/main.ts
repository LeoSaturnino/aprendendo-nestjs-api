import { ModelNotFoundExceptionFilter } from './exception-filters/model-not-found-exception-filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ModelNotFoundExceptionFilter);
  await app.listen(3000);
}
bootstrap();
