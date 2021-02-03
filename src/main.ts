import { ModelNotFoundExceptionFilter } from './exception-filters/model-not-found-exception-filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ModelNotFoundExceptionFilter);

  const options = new DocumentBuilder()
  .setTitle('NestJS API')
  .setDescription('Documentação da API do NestJS')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
