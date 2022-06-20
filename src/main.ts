import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';
import helmet from 'helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(compression()); // https://docs.nestjs.com/techniques/compression
  app.use(helmet()); // https://docs.nestjs.com/security/helmet

  const config = new DocumentBuilder()
    .setTitle('Ecosia-Clone API')
    .setDescription('The Ecosia-Clone API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await await app.listen(process.env.PORT || 8080);
}
bootstrap();
