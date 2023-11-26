import { ApiProperty } from '@nestjs/swagger';

export class Country {
  @ApiProperty({
    example: 'example',
  })
  name: string;

  @ApiProperty({
    example: 'example',
  })
  enName: string;

  @ApiProperty({
    example: 'example',
  })
  alpha2: string;

  @ApiProperty({
    example: 'example',
  })
  alpha3: string;

  @ApiProperty({
    example: 'example',
  })
  numeric: string;

  @ApiProperty({
    example: 'example',
  })
  iso3166_2: string;
}

export class GetCountriesResponse {
  @ApiProperty({
    type: Country,
    isArray: true,
  })
  countries: Country[];
}
