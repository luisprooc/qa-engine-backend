import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({});
  app.use(helmet());
  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('QA Engine API')
    .setDescription('The QA API description')
    .setVersion('1.0')
    .addTag('QA')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(AppModule.port);
}
bootstrap();
