import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Comuna } from '../entity/Comuna';
import { ComunaService } from './comuna.service';

describe('ComunaService', () => {
  let service: ComunaService;
  const mock = {
    find: jest.fn().mockImplementation(() => true),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ComunaService,
        {
          provide: getRepositoryToken(Comuna),
          useValue: mock,
        },
      ],
    }).compile();

    service = module.get<ComunaService>(ComunaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
