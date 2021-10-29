import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostgresConfigService } from './config.service';
import postgresConfiguration from './configuration';

@Module({
  imports: [ConfigModule.forRoot({
    load: [postgresConfiguration]
  })],
  controllers: [],
  providers: [PostgresConfigService],
  exports: [PostgresConfigService]
})
export class PostgresConfigModule {}
