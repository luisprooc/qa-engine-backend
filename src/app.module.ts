import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/app/configuration';
import configurationKeys from './config/app/configuration.keys';
import { PostgresDatabaseProviderModule } from './models/database/provider.module';
import { UsersModule } from './models/users/users.module';
import { QuestionsModule } from './models/questions/questions.module';
import { AnswersModule } from './models/answers/answers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    PostgresDatabaseProviderModule,
    UsersModule,
    QuestionsModule,
    AnswersModule,
    AuthModule
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
