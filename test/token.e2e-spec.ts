import * as request from 'supertest';

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import { TokensModule } from '../src/token/tokens.module';
import { JwtService } from '@nestjs/jwt';

describe('CiudadController', () => {
  let app: INestApplication;
  const mockJwtService = {
    verify: jest.fn(() => true),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TokensModule],
    })
      .overrideProvider(JwtService)
      .useValue(mockJwtService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it(`/GET verifyToken`, () => {
    const QUERY = 'token=TEST';
    return request(app.getHttpServer())
      .get(`/verifyToken?${QUERY}`)
      .expect(200)
      .expect('true');
  });
});
