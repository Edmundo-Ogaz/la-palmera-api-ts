import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';

import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

import { Public } from './constants';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log('login...');
    return this.authService.login(req.user);
  }

  @Get('profile')
  getProfile(@Request() req) {
    console.log('getProfile...');
    return req.user;
  }
}
