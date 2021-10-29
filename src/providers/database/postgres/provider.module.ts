import { DatabaseType } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { PostgresConfigModule } from 'src/config/database/postgres/config.module';
import { PostgresConfigService } from 'src/config/database/postgres/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [PostgresConfigModule],
      useFactory: async (_postgresConfigService: PostgresConfigService) => {
        
        if (process.env.NODE_ENV === 'production') {
          const parse = require('pg-connection-string').parse;
          const config = parse(process.env.DATABASE_URL);

          return {
            type: 'postgres' as DatabaseType,
            host: config.host,
            port: config.port,
            username: config.username,
            password: config.password,
            database: config.database,
            entities: [],
            autoLoadEntities: true,
            ssl: {
              rejectUnauthorized: false
            },  
          }
        }

        return {
          type: 'postgres' as DatabaseType,
          host: _postgresConfigService.host,
          port: _postgresConfigService.port,
          username: _postgresConfigService.username,
          password: _postgresConfigService.password,
          database: _postgresConfigService.database,
          entities: [],
          autoLoadEntities: true,
        }
      },
      inject: [PostgresConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class PostgresDatabaseProviderModule {}