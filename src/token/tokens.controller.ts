import { Controller, Get, Query } from '@nestjs/common';

import { TokensService } from './tokens.service';

import { Public } from '../constants';

@Controller()
export class TokensController {
  constructor(private readonly tokensService: TokensService) {}

  @Public()
  @Get('verifyToken')
  verifyToken(@Query('token') token: string): boolean {
    console.log('verifyToken...');
    return this.tokensService.verifyToken(token);
  }
}
