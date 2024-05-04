import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  // Create the Nest application instance with CORS enabled
  const app = await NestFactory.create(AppModule, { cors: true });

  // Use cookie parser middleware to handle cookies in requests
  app.use(cookieParser());

  // Start listening for incoming requests on port 8000
  await app.listen(8000);
}

bootstrap();
