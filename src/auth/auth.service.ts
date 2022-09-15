import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service';
import { TokensService } from '../token/tokens.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private tokenService: TokensService,
    private configService: ConfigService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    console.log('AuthService validateUser');
    const user = await this.usersService.findOne(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    console.log('AuthService login');
    const payload = { username: user.username, sub: user.userId };
    const token = this.tokenService.getToken(payload);
    return {
      expiration: new Date(
        Date.now() +
          parseInt(this.configService.get<string>('EXPIRATION_TIME')),
      ),
      user: {
        name: 'test',
        isAdmin: true,
        userId: 1,
        username: '1234@1234.cl',
      },
      token,
    };
  }
}
