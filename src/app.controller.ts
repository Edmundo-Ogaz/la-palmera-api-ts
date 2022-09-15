import { Controller, Get } from '@nestjs/common';
import { Public } from './constants';

@Controller()
export class AppController {
  @Public()
  @Get('health')
  async login() {
    return true;
  }
}
