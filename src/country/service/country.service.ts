import { Injectable, NotFoundException } from '@nestjs/common';
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
    if (!country) {
      throw new NotFoundException('Country not exists');
    }
    return country._id;
  }

  async getCountries() {
    const countries = await this.countryRepository.findCountries();
    return {
      countries: countries.map((country) =>
        country.toJSON({ flattenMaps: false }),
      ),
    };
  }

  async getCountryNames() {
    const countries = await this.countryRepository.findCountryNames();
    return {
      countries: countries.map((country) => country.name),
    };
  }
}
