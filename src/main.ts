import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerConfig } from './config/docs/swagger-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerConfig.build(app);

  await app.listen(3000);
}

bootstrap();
