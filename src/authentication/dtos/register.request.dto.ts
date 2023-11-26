import { IsString, IsNotEmpty } from 'class-validator';

export class RegisterRequestDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  countryName: string;
}
