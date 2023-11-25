import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthenticationService } from '../service/authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  login(
    @Body() { username, password }: { username: string; password: string },
  ) {
    return this.authenticationService.login({ username, password });
  }

  @HttpCode(HttpStatus.OK)
  @Post('/register')
  register(
    @Body() { username, password }: { username: string; password: string },
  ) {
    return this.authenticationService.register({ username, password });
  }
}
