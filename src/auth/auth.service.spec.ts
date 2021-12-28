import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../models/users/users.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    })
    .overrideProvider(UsersService)
    .useValue({})
    .overrideProvider(AuthService)
    .useValue({})
    .compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
