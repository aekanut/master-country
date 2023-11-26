import { Module } from '@nestjs/common';
import { CountryService } from './service/country.service';
import { CountryController } from './controller/country.controller';
import { MongooseModule } from '@nestjs/mongoose';
import CountryModel from './model/country.model';
import CountryRepository from './repository/country.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CountryModel.modelName, schema: CountryModel.schema },
    ]),
  ],
  controllers: [CountryController],
  providers: [CountryService, CountryRepository],
  exports: [CountryService, CountryRepository],
})
export class CountryModule {}
