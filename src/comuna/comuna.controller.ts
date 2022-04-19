import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Query,
  Body,
  Param,
} from '@nestjs/common';

import { ComunaDto } from '../dto/ComunaDto';
import { ComunaService } from './comuna.service';

@Controller()
export class ComunaController {
  constructor(private readonly comunaService: ComunaService) {}

  @Get('comunas')
  getAll() {
    console.log('ComunaController getAll...');
    return this.comunaService.findAll();
  }

  @Get(`comunas/search`)
  search(@Query('comuna') comuna: string, @Query('ciudad') ciudad: string) {
    console.log(`ComunaController search comuna ${comuna} ciudad ${ciudad}`);
    comuna = comuna !== '' ? comuna : null;
    ciudad = ciudad !== '' ? ciudad : null;
    return this.comunaService.findByCodigoOrCodigoCiudad(comuna, ciudad);
  }

  @Post('comunas')
  save(@Body() comunaDto: ComunaDto) {
    console.log('ComunaController save');
    return this.comunaService.save(comunaDto);
  }

  @Put('comunas')
  update(@Body() comunaDto: ComunaDto) {
    console.log('ComunaController update');
    return this.comunaService.save(comunaDto);
  }

  @Delete('comunas/:code')
  delete(@Param('code') code: string): Promise<boolean> {
    console.log(`ComunaController delete code ${code}`);
    return this.comunaService.delete(code);
  }
}
