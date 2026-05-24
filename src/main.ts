import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
<<<<<<< HEAD
=======
import { ValidationPipe } from '@nestjs/common';
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
<<<<<<< HEAD
=======
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1

  const config = new DocumentBuilder()
    .setTitle('API para la gestion pedidos en el sistema UnClickDeliveryNG')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
