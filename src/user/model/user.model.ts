import { prop, getModelForClass } from '@typegoose/typegoose';

export class User {
  @prop({ required: true, index: true, unique: true })
  public username: string;

  @prop({ required: true })
  public password: string;
}

const UserModel = getModelForClass(User);

export default UserModel;
