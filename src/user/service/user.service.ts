import { Injectable } from '@nestjs/common';
import UserRepository from '../repository/user.repository';
import { User } from '../model/user.model';
import { CountryService } from 'src/country/service/country.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly countryService: CountryService,
  ) {}

  async findUsers() {
    const users = await this.userRepository.findUsers();
    return {
      users: users.map((user) => user.toJSON({ flattenMaps: false })),
    };
  }

  async findUserByUsername(username: User['username']) {
    return this.userRepository.findUserByUsername(username);
  }

  async createUser({
    username,
    password,
    countryName,
  }: {
    username: string;
    password: string;
    countryName: string;
  }) {
    const countryId =
      await this.countryService.getCountryIdByCountryName(countryName);
    return this.userRepository.createUser({
      username,
      password,
      country: countryId,
    });
  }
}
