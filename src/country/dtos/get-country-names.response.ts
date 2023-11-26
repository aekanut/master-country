import { ApiProperty } from '@nestjs/swagger';

export class GetCountryNamesResponse {
  @ApiProperty({
    example: ['ไทย'],
    type: String,
    isArray: true,
  })
  countries: string[];
}
