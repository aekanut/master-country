import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { AuthenticationGuard } from 'src/guard/authentication.guard';
import { GetProfileRequestDto } from '../dtos/get-profile.request.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GetUsersResponse } from '../dtos/get-users.response';

@ApiBearerAuth()
@ApiTags('User')
@UseGuards(AuthenticationGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    description: 'This endpoint is used to get all user',
  })
  @ApiResponse({
    type: GetUsersResponse,
    status: 200,
    description: 'The list of user',
  })
  @Get('/')
  getUsers() {
    return this.userService.findUsers();
  }

  @ApiOperation({
    description: 'This endpoint is used to get content of jwt',
  })
  @ApiResponse({
    type: GetProfileRequestDto,
    status: 200,
    description: 'The decoded payload of jwt',
  })
  @Get('/profile')
  getProfile(@Req() { user }: { user: GetProfileRequestDto }) {
    return user;
  }
}
