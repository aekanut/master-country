import { ApiProperty } from '@nestjs/swagger';
import { Country } from 'src/country/dtos/get-countries.response';

class User {
  @ApiProperty({
    example: 'example',
  })
  username: string;

  @ApiProperty({
    example: 'example',
  })
  password: string;

  @ApiProperty({
    type: Country,
  })
  country: Country;
}

export class GetUsersResponse {
  @ApiProperty({
    type: User,
    isArray: true,
  })
  users: User[];
}
