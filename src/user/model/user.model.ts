import { prop, getModelForClass } from '@typegoose/typegoose';

class User {
  @prop({ required: true })
  public username: string;

  @prop({ required: true })
  public password: string;
}

const UserModel = getModelForClass(User);

export default UserModel;
