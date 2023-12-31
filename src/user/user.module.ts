import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import UserModel from './model/user.model';
import UserRepository from './repository/user.repository';
import { CountryModule } from 'src/country/country.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserModel.modelName, schema: UserModel.schema },
    ]),
    CountryModule,
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository],
})
export class UserModule {}
