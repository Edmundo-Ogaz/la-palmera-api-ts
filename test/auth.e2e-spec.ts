import * as request from 'supertest';

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

import { AuthModule } from '../src/auth/auth.module';
import { UserModel } from '../src/entity/UserModel';

describe('AuthController', () => {
  let app: INestApplication;
  const mockJwtService = {
    sign: jest.fn(() => true),
  };
  const mockUserRepository = {
    findOneBy: jest.fn(() => ({
      username: 'TEST',
      password: '$2a$10$2mk4qvVG6ppQp/LkykBql.xhwe3Z/nKJBipGsGy5/M5VYrfvlwVu6',
    })),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AuthModule],
    })
      .overrideProvider(getRepositoryToken(UserModel))
      .useValue(mockUserRepository)
      .overrideProvider(JwtService)
      .useValue(mockJwtService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it(`/POST auth/login`, () => {
    const DATA = { username: 'TEST', password: 'TEST' };
    return request(app.getHttpServer())
      .post(`/auth/login`)
      .send(DATA)
      .expect(201)
      .expect({
        expiration: null,
        user: {
          name: 'test',
          isAdmin: true,
          userId: 1,
          username: '1234@1234.cl',
        },
        token: true,
      });
  });
});
