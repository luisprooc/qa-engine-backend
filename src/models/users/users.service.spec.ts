import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  const mockUserService = {
    findOneByEmail: jest.fn().mockImplementation(() => ({}))
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    })
    .overrideProvider(UsersService)
    .useValue(mockUserService)
    .compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be a error', async () => {
    expect((await service.findOneByEmail('lrosaaa'))).toEqual({});
  });
});
