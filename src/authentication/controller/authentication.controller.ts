import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthenticationService } from '../service/authentication.service';
import { LoginRequestDto } from '../dtos/login.request.dto';
import { RegisterRequestDto } from '../dtos/register.request.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AccessTokenResponse } from '../dtos/access-token.response';

@ApiTags('Authentication')
@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @ApiOperation({
    description: 'This endpoint is used to login',
  })
  @ApiResponse({
    type: AccessTokenResponse,
    status: 200,
    description: 'Login success',
  })
  @ApiResponse({
    status: 404,
    description: 'Not found user from username',
  })
  @ApiResponse({ status: 401, description: 'Password is incorrect' })
  @HttpCode(HttpStatus.OK)
  @Post('/login')
  login(
    @Body() { username, password }: LoginRequestDto,
  ): Promise<AccessTokenResponse> {
    return this.authenticationService.login({ username, password });
  }

  @ApiOperation({
    description: 'This endpoint is used to register',
  })
  @ApiResponse({
    type: AccessTokenResponse,
    status: 200,
    description: 'Register success',
  })
  @ApiResponse({
    status: 409,
    description: 'User already exists',
  })
  @ApiResponse({
    status: 404,
    description: 'Country name is not exists',
  })
  @HttpCode(HttpStatus.OK)
  @Post('/register')
  register(
    @Body()
    { username, password, countryName }: RegisterRequestDto,
  ): Promise<AccessTokenResponse> {
    return this.authenticationService.register({
      username,
      password,
      countryName,
    });
  }
}
