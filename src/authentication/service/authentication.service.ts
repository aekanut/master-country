import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { isEmpty } from 'lodash';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/model/user.model';
import { UserService } from 'src/user/service/user.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login({ username, password }: Pick<User, 'username' | 'password'>) {
    const user = await this.userService.findUserByUsername(username);
    if (isEmpty(user)) {
      throw new NotFoundException('User not found');
    }

    const isVerified = bcrypt.compareSync(password, user.password);
    if (!isVerified) {
      throw new UnauthorizedException('Incorrect password');
    }
    return this.generateAccessToken(user.id, user.username);
  }

  async register({ username, password }: User) {
    const existsUser = await this.userService.findUserByUsername(username);
    if (!isEmpty(existsUser)) {
      throw new ConflictException('User already exists');
    }

    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt);

    const user = await this.userService.createUser({
      username,
      password: encryptedPassword,
    });
    return this.generateAccessToken(user.id, user.username);
  }

  private generateAccessToken(id: string, username: string) {
    return {
      accessToken: this.jwtService.sign({ sub: id, username }),
    };
  }
}
