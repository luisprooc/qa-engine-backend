import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import configurationKeys from './configuration.keys';

@Injectable()
export class PostgresConfigService {
  constructor(private _configService: ConfigService) {}

  get port(): number {
    return this._configService.get<number>(configurationKeys.DB_PORT);
  }

  get host(): string {
    return this._configService.get<string>(configurationKeys.DB_HOST);
  }

  get username(): string {
    return this._configService.get<string>(configurationKeys.DB_USER);
  }

  get database(): string {
    return this._configService.get<string>(configurationKeys.DB_NAME);
  }

  get password(): string {
    return this._configService.get<string>(configurationKeys.DB_PASSWORD);
  }
}