import { Controller, Get } from '@nestjs/common';
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
}
