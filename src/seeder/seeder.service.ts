import { Injectable } from '@nestjs/common';
import * as initialCountries from './data/country-list-th.json';
import { CountryService } from 'src/country/service/country.service';

@Injectable()
export class SeederService {
  constructor(private readonly countryService: CountryService) {}

  insertInitialCountries() {
    return this.countryService.insertCountries(initialCountries);
  }
}
