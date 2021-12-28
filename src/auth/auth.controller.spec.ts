import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../models/users/user.repository';
import { UsersModule } from '../models/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtSecret } from './utils/jwt.secret';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    })
    .overrideProvider(AuthService)
    .useValue({})
    .compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
