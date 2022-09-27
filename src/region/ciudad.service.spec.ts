import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Region } from '../entity/Region';
import { RegionService } from './region.service';

describe('RegionService', () => {
  const resp: Array<Region> = [new Region()];
  let service: RegionService;
  const mock = {
    find: jest.fn().mockImplementation(() => {
      return resp;
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RegionService,
        {
          provide: getRepositoryToken(Region),
          useValue: mock,
        },
      ],
    }).compile();

    service = module.get<RegionService>(RegionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be get list of cities', async () => {
    expect(await service.findAll()).toEqual(resp);
  });
});
