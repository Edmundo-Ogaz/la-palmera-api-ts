import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Ciudad } from '../entity/Ciudad';
import { CiudadController } from './ciudad.controller';
import { CiudadService } from './ciudad.service';

describe('CiudadController', () => {
  let controller: CiudadController;
  let service: CiudadService;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'newuser',
          password: 'password',
          database: 'lapalmera2',
          logging: true,
          entities: [Ciudad],
        }),
        TypeOrmModule.forFeature([Ciudad]),
      ],
      controllers: [CiudadController],
      providers: [CiudadService],
    }).compile();

    controller = module.get<CiudadController>(CiudadController);
    service = module.get<CiudadService>(CiudadService);
  });

  afterAll(async () => {
    module.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of cities', async () => {
      const cities = [new Ciudad()];
      jest
        .spyOn(service, 'findAll')
        .mockImplementation(() => Promise.resolve(cities) as Promise<Ciudad[]>);

      expect(await controller.getAll()).toBe(cities);
    });
  });
});
