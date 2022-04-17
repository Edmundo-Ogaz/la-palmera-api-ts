import { Controller, Get } from '@nestjs/common';

import { ComunaService } from './comuna.service';

@Controller()
export class ComunaController {
  constructor(private readonly comunaService: ComunaService) {}

  @Get('comunas')
  getAll() {
    console.log('ComunaController getAll...');
    return this.comunaService.findAll();
  }
}
