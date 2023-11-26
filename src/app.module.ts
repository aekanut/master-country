import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthenticationModule } from './authentication/authentication.module';
import { SeederModule } from './seeder/seeder.module';
import { CountryModule } from './country/country.module';
import configuration from './configuration';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const { uri, dbName } = configService.get<{
          uri: string;
          dbName: string;
        }>('mongodb');
        return {
          uri,
          dbName,
          autoCreate: true,
        };
      },
    }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      global: true,
      useFactory: (configService: ConfigService) => {
        const { secret, timeout } = configService.get<{
          secret: string;
          timeout: string;
        }>('jwt');
        return { secret, signOptions: { expiresIn: timeout } };
      },
    }),
    UserModule,
    AuthenticationModule,
    SeederModule,
    CountryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
