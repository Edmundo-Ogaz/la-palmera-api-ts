import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', 'https://la-palmera-react.vercel.app/'],
  });

  await app.listen(process.env.PORT || 8081);
}
bootstrap();
