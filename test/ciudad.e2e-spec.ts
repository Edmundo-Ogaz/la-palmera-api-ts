import * as request from 'supertest';

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Ciudad } from '../src/entity/Ciudad';
import { CiudadModule } from '../src/ciudad/ciudad.module';

describe('CiudadController', () => {
  let app: INestApplication;
  const CITIES: Array<string> = ['test'];
  const mockCiudadRepository = {
    find: jest.fn(() => CITIES),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CiudadModule],
    })
      .overrideProvider(getRepositoryToken(Ciudad))
      .useValue(mockCiudadRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it(`/GET ciudades`, () => {
    return request(app.getHttpServer())
      .get('/ciudades')
      .expect(200)
      .expect(CITIES);
  });
});
