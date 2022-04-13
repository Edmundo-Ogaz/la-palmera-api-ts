import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';

import { AppService } from './app.service';

import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

import { Public } from './constants';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Public()
  @Get()
  getHello(): string {
    console.log('getHello...');
    return this.appService.getHello();
  }

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
