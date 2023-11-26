import { Controller, Get, UseGuards } from '@nestjs/common';
import { CountryService } from '../service/country.service';
import { AuthenticationGuard } from 'src/guard/authentication.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GetCountryNamesResponse } from '../dtos/get-country-names.response';
import { GetCountriesResponse } from '../dtos/get-countries.response';

@ApiTags('Country')
@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @ApiBearerAuth()
  @ApiOperation({
    description: 'This endpoint is used to get country objects',
  })
  @ApiResponse({
    type: GetCountriesResponse,
    status: 200,
    description: 'List of country object',
  })
  @UseGuards(AuthenticationGuard)
  @Get('/')
  getCountries() {
    return this.countryService.getCountries();
  }

  @ApiOperation({
    description: 'This endpoint is used to get country names',
  })
  @ApiResponse({
    type: GetCountryNamesResponse,
    status: 200,
    description: 'List of country name',
  })
  @Get('/name')
  getCountryName(): Promise<GetCountryNamesResponse> {
    return this.countryService.getCountryNames();
  }
}
