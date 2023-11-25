import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    UserModule,
    AuthenticationModule,
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
