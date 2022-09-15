import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';

import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';

import { Public } from '../constants';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    console.log('AuthController login...');
    return this.authService.login(req.user);
  }

  @Get('profile')
  getProfile(@Request() req) {
    console.log('getProfile...');
    return req.user;
  }
}
