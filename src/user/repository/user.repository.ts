import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';
import UserModel, { User } from '../model/user.model';

@Injectable()
export default class UserRepository {
  constructor(
    @InjectModel(UserModel.modelName)
    private readonly userModel: ReturnModelType<typeof UserModel>,
  ) {}

  findUsers() {
    return this.userModel.find().populate('country').exec();
  }

  findUserByUsername(username: User['username']) {
    return this.userModel.findOne({ username }).exec();
  }

  createUser({ username, password, country }: User) {
    return this.userModel.create({ username, password, country });
  }
}
