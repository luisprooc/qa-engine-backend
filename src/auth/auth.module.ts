import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/models/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecret } from './utils/jwt.secret';
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
  providers: [AuthService],
})
export class AuthModule {}
