import { Injectable } from '@nestjs/common';
import UserRepository from '../repository/user.repository';
import { User } from '../model/user.model';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  findUsers() {
    return this.userRepository.findUsers();
  }

  findUserByUsername(username: User['username']) {
    return this.userRepository.findUserByUsername(username);
  }

  createUser({ username, password }: User) {
    return this.userRepository.createUser({ username, password });
  }
}
