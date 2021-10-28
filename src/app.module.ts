import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/app/configuration';
import configurationKeys from './config/app/configuration.keys';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration]
  })],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number;

  constructor(private _configService: ConfigService){
    AppModule.port = this._configService.get<number>(configurationKeys.APP_PORT);
  }
}
