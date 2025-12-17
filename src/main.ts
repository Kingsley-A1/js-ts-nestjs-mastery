import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation pipe(tURN ON THE SECURITY SYSTEM)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove any properties that are not in the DTO
      forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are present
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
