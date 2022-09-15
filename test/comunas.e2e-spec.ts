import * as request from 'supertest';

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm';

import { Comuna } from '../src/entity/Comuna';
import { ComunaModule } from '../src/comuna/comuna.module';

import { ComunaDto } from '../src/dto/ComunaDto';

describe('ComunaController', () => {
  let app: INestApplication;
  const COMUNAS: Array<string> = ['test'];
  const mockComunaRepository = {
    find: jest.fn(() => COMUNAS),
    findBy: jest.fn(() => COMUNAS),
    save: jest.fn(() => COMUNAS[0]),
    delete: jest.fn(() => {
      const mock = new DeleteResult();
      mock.affected = 1;
      return mock;
    }),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ComunaModule],
    })
      .overrideProvider(getRepositoryToken(Comuna))
      .useValue(mockComunaRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it(`/GET comunas`, () => {
    return request(app.getHttpServer())
      .get('/comunas')
      .expect(200)
      .expect(COMUNAS);
  });

  it(`/GET /comunas/search`, () => {
    const PARAMS = 'comuna=test&ciudad=test';
    return request(app.getHttpServer())
      .get(`/comunas/search?${PARAMS}`)
      .expect(200)
      .expect(COMUNAS);
  });

  it(`/POST /comunas`, () => {
    const comunaDto = new ComunaDto();
    comunaDto.codigo = 'TEST';
    comunaDto.nombre = 'TEST';
    comunaDto.codigoCiudad = 'TEST';
    return request(app.getHttpServer())
      .post(`/comunas`)
      .send(comunaDto)
      .expect(201)
      .expect(COMUNAS[0]);
  });

  it(`/Put /comunas`, () => {
    const comunaDto = new ComunaDto();
    comunaDto.codigo = 'TEST';
    comunaDto.nombre = 'TEST';
    comunaDto.codigoCiudad = 'TEST';
    return request(app.getHttpServer())
      .put(`/comunas`)
      .send(comunaDto)
      .expect(200)
      .expect(COMUNAS[0]);
  });

  it(`/Delete /comunas/id`, () => {
    const CODE = 'test';
    return request(app.getHttpServer())
      .delete(`/comunas/${CODE}`)
      .expect(200)
      .expect('true');
  });
});
