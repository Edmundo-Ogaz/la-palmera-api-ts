import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { TokensService } from '../token/tokens.service';
import { ConfigService } from '@nestjs/config';

describe('AuthService', () => {
  let service: AuthService;
  let module: TestingModule;

  const mock = {
    test: jest.fn().mockImplementation(() => true),
  };

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: mock,
        },
        {
          provide: TokensService,
          useValue: mock,
        },
        {
          provide: ConfigService,
          useValue: mock,
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  afterAll(async () => {
    module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
