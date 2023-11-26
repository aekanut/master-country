import { Controller, Get, UseGuards } from '@nestjs/common';
import { CountryService } from '../service/country.service';
import { AuthenticationGuard } from 'src/guard/authentication.guard';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @UseGuards(AuthenticationGuard)
  @Get('/')
  getCountries() {
    return this.countryService.getCountries();
  }

  @Get('/name')
  getCountryName() {
    return this.countryService.getCountryNames();
  }
}
