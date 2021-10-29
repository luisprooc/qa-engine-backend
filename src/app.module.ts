import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/app/configuration';
import configurationKeys from './config/app/configuration.keys';
import { PostgresDatabaseProviderModule } from './providers/database/postgres/provider.module';
import { UsersModule } from './models/users/users.module';

@Module({
  imports: [ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    PostgresDatabaseProviderModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number;

  constructor(private _configService: ConfigService){
    AppModule.port = this._configService.get<number>(configurationKeys.PORT);
  }
}
