import { ApiProperty } from '@nestjs/swagger';

export class GetProfileRequestDto {
  @ApiProperty({
    example: 'example',
  })
  sub: string;

  @ApiProperty({
    example: 'example',
  })
  usernames: string;

  @ApiProperty({
    example: 123,
  })
  iat: number;

  @ApiProperty({
    example: 123,
  })
  exp: number;
}
