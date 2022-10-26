import { Controller, Get } from '@nestjs/common';
import { Public } from './constants';

@Controller()
export class AppController {
  @Public()
  @Get('health')
  async health() {
    return true;
  }
}
