import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { SeederService } from '../seeder.service';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  Logger.log('Start seed countries', 'Seeder');
  const seederService = appContext.get(SeederService);
  await seederService.insertInitialCountries();
  Logger.log('End seed countries', 'Seeder');
  appContext.close();
}
bootstrap();
