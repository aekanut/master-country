import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { CountryModule } from 'src/country/country.module';

@Module({
  imports: [CountryModule],
  providers: [SeederService],
})
export class SeederModule {}
