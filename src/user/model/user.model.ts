import { prop, getModelForClass } from '@typegoose/typegoose';
import { Types } from 'mongoose';

export class User {
  @prop({ required: true, index: true, unique: true })
  public username: string;

  @prop({ required: true })
  public password: string;

  @prop({ type: Types.ObjectId, ref: 'Country' })
  public country: Types.ObjectId;
}

const UserModel = getModelForClass(User, {
  schemaOptions: {
    timestamps: true,
  },
});

export default UserModel;
