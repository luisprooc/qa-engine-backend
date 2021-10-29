import { DatabaseType } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { PostgresConfigModule } from 'src/config/database/postgres/config.module';
import { PostgresConfigService } from 'src/config/database/postgres/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [PostgresConfigModule],
      useFactory: async (_postgresConfigService: PostgresConfigService) => ({
        type: 'postgres' as DatabaseType,
        host: _postgresConfigService.host,
        port: _postgresConfigService.port,
        username: _postgresConfigService.username,
        password: _postgresConfigService.password,
        database: _postgresConfigService.database,
        entities: [
          // ... All MySQL based schemas/entities
        ],
      }),
      inject: [PostgresConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class PostgresDatabaseProviderModule {}