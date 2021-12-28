import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../models/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecret } from './utils/jwt.secret';
import { JwtStrategy } from './utils/jwt.strategy';
@Module({
  imports: [
    UsersModule, 
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { 
        algorithm: 'HS512',
        issuer: 'QaEngineBackend',
      },
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
