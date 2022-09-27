import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Region } from '../entity/Region';
import { RegionController } from './region.controller';
import { RegionService } from './region.service';

describe('RegionController', () => {
  let controller: RegionController;
  let service: RegionService;
  let module: TestingModule;

  const mockRegionRepository = {
    test: jest.fn(() => true),
  };

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [RegionController],
      providers: [
        RegionService,
        {
          provide: getRepositoryToken(Region),
          useValue: mockRegionRepository,
        },
      ],
    }).compile();

    controller = module.get<RegionController>(RegionController);
    service = module.get<RegionService>(RegionService);
  });

  afterAll(async () => {
    module.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of cities', async () => {
      const regions = [new Region()];
      jest
        .spyOn(service, 'findAll')
        .mockImplementation(
          () => Promise.resolve(regions) as Promise<Region[]>,
        );

      expect(await controller.getAll()).toBe(regions);
    });
  });
});
