import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { AuthenticationGuard } from 'src/guard/authentication.guard';
import { getProfileRequestDto } from '../dtos/get-profile.request.dto';

@UseGuards(AuthenticationGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  getUsers() {
    return this.userService.findUsers();
  }

  @Get('/profile')
  getProfile(@Req() { user }: { user: getProfileRequestDto }) {
    return user;
  }
}
