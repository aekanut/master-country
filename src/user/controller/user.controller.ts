import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { AuthenticationGuard } from 'src/authentication/guard/authentication.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthenticationGuard)
  @Get('/')
  getUsers() {
    return this.userService.findUsers();
  }
}
