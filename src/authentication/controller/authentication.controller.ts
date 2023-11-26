import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthenticationService } from '../service/authentication.service';
import { LoginRequestDto } from '../dtos/login.request.dto';
import { RegisterRequestDto } from '../dtos/register.request.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  login(@Body() { username, password }: LoginRequestDto) {
    return this.authenticationService.login({ username, password });
  }

  @HttpCode(HttpStatus.OK)
  @Post('/register')
  register(
    @Body()
    { username, password, countryName }: RegisterRequestDto,
  ) {
    return this.authenticationService.register({
      username,
      password,
      countryName,
    });
  }
}
