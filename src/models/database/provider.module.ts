import { DatabaseType } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { PostgresConfigModule } from 'src/config/database/postgres/config.module';
import { PostgresConfigService } from 'src/config/database/postgres/config.service';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [PostgresConfigModule],
      inject: [PostgresConfigService],
      useFactory: async (_postgresConfigService: PostgresConfigService) => {

        const defaultConnections = {
          type: 'postgres' as DatabaseType,
          entities: [__dirname + '/../**/**/entitities/*.entity{.ts,.js}'],
          autoLoadEntities: true,
        }
        
        if (process.env.NODE_ENV === 'production') {
          const parse = require('pg-connection-string').parse;
          const config = parse(process.env.DATABASE_URL);

          return {
            ...defaultConnections,
            host: config.host,
            port: config.port,
            username: config.user,
            password: config.password,
            database: config.database,
            ssl: {
              rejectUnauthorized: false
            },
            options: {
              ssl: true,
            }  
          }
        }

        return {
          ...defaultConnections,
          host: _postgresConfigService.host,
          port: _postgresConfigService.port,
          username: _postgresConfigService.username,
          password: _postgresConfigService.password,
          database: _postgresConfigService.database,
          synchronize: true,
          migrationsRun: true,
        }
      },
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class PostgresDatabaseProviderModule {}