import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Comuna } from '../entity/Comuna';
import { ComunaService } from './comuna.service';

describe('ComunaService', () => {
  const resp: Array<Comuna> = [new Comuna()];
  let service: ComunaService;
  const mockComunaRepository = {
    find: jest.fn().mockImplementation(() => {
      return resp;
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ComunaService,
        {
          provide: getRepositoryToken(Comuna),
          useValue: mockComunaRepository,
        },
      ],
    }).compile();

    service = module.get<ComunaService>(ComunaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
