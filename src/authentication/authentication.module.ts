import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthenticationController } from './controller/authentication.controller';
import { UserService } from 'src/user/service/user.service';
import { AuthenticationService } from './service/authentication.service';
import { CountryModule } from 'src/country/country.module';

@Module({
  imports: [UserModule, CountryModule],
  controllers: [AuthenticationController],
  providers: [UserService, AuthenticationService],
})
export class AuthenticationModule {}
