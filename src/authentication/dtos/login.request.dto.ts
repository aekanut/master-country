import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class LoginRequestDto {
  @ApiProperty({
    example: 'admin',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    example: '12345678',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
