import { Controller, Get, Query } from '@nestjs/common';
import { Ciudad } from '../entity/Ciudad';

import { CiudadService } from './ciudad.service';

@Controller()
export class CiudadController {
  constructor(private readonly ciudadService: CiudadService) {}

  @Get('ciudades')
  getAll(): Promise<Ciudad[]> {
    console.log('CiudadController getAll...');
    return this.ciudadService.findAll();
  }

  @Get(`ciudades/search`)
  search(@Query('ciudad') ciudad: string, @Query('region') region: string) {
    console.log(`CiudadController search ciudad ${ciudad} region ${region}`);
    ciudad = ciudad !== '' ? ciudad : null;
    region = region !== '' ? region : null;
    return this.ciudadService.findByCodigoOrCodigoRegion(ciudad, region);
  }
}
