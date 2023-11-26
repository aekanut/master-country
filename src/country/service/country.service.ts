import { Injectable } from '@nestjs/common';
import CountryRepository from '../repository/country.repository';
import { Country } from '../model/country.model';

@Injectable()
export class CountryService {
  constructor(private readonly countryRepository: CountryRepository) {}

  insertCountries(countries: Country[]) {
    return this.countryRepository.insertCountries(countries);
  }

  async getCountryIdByCountryName(countryName: string) {
    const country =
      await this.countryRepository.findCountryByThaiName(countryName);
    return country?._id;
  }

  getCountries() {
    return this.countryRepository.findCountries();
  }
}