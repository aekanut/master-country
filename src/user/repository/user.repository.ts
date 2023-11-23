import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';
import UserModel from '../model/user.model';

@Injectable()
export default class UserRepository {
  constructor(
    @InjectModel(UserModel.modelName)
    private readonly userModel: ReturnModelType<typeof UserModel>,
  ) {}

  findUsers() {
    return this.userModel.find().exec();
  }
}
