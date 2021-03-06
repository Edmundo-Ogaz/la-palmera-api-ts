import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service';
import { TokensService } from '../token/tokens.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private tokenService: TokensService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    console.log('AuthService username');
    const user = await this.usersService.findOne(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.tokenService.getToken(payload),
    };
  }
}
