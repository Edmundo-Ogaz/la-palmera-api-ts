import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Ciudad } from '../entity/Ciudad';
import { CiudadService } from './ciudad.service';

describe('CiudadService', () => {
  const resp: Array<Ciudad> = [new Ciudad()];
  let service: CiudadService;
  const mock = {
    find: jest.fn().mockImplementation(() => {
      return resp;
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CiudadService,
        {
          provide: getRepositoryToken(Ciudad),
          useValue: mock,
        },
      ],
    }).compile();

    service = module.get<CiudadService>(CiudadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be get list of cities', async () => {
    expect(await service.findAll()).toEqual(resp);
  });
});
