import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/models/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule, 
    ConfigModule,
    JwtModule.register({
      signOptions: { 
        algorithm: 'HS512',
        issuer: 'QaEngineBackend',
      },
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
