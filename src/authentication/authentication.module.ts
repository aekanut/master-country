import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { AuthenticationController } from './controller/authentication.controller';
import { UserService } from 'src/user/service/user.service';
import { AuthenticationService } from './service/authentication.service';
import { CountryModule } from 'src/country/country.module';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const { secret, timeout } = configService.get<{
          secret: string;
          timeout: string;
        }>('jwt');
        return { secret, signOptions: { expiresIn: timeout } };
      },
    }),
    UserModule,
    CountryModule,
  ],
  controllers: [AuthenticationController],
  providers: [UserService, AuthenticationService],
})
export class AuthenticationModule {}
