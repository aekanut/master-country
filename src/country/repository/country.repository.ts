import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import CountryModel, { Country } from '../model/country.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export default class CountryRepository {
  constructor(
    @InjectModel(CountryModel.modelName)
    private readonly countryModel: ReturnModelType<typeof CountryModel>,
  ) {}

  insertCountries(countries: Country[]) {
    return this.countryModel.insertMany(countries);
  }

  findCountryByThaiName(countryName: string) {
    return this.countryModel.findOne({ name: countryName });
  }

  findCountries() {
    return this.countryModel.find();
  }
}
