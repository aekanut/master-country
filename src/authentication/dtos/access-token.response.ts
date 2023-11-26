import { ApiProperty } from '@nestjs/swagger';

export class AccessTokenResponse {
  @ApiProperty({
    example: 'accessToken',
  })
  accessToken: string;
}
