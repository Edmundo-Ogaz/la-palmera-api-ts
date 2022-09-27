import { Controller, Get } from '@nestjs/common';
import { Region } from '../entity/Region';

import { RegionService } from './region.service';

@Controller()
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Get('regiones')
  getAll(): Promise<Region[]> {
    console.log('RegionController getAll...');
    return this.regionService.findAll();
  }
}
