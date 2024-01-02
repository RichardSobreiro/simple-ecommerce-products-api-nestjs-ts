import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ZeebeServer } from 'nestjs-zeebe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const microservice = app.connectMicroservice({
    strategy: app.get(ZeebeServer),
  });

  await app.startAllMicroservices();

  await app.listen(3000);
}
bootstrap();
