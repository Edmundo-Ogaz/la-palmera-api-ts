import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokensService {
  constructor(private jwtService: JwtService) {}
  getToken(payload: object): string {
    console.log('TokensService getToken');
    return this.jwtService.sign(payload);
  }

  verifyToken(token: string): boolean {
    console.log('TokensService verifyToken');
    this.jwtService.verify(token);
    return true;
  }
}
