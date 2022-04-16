import { Module } from '@nestjs/common';

import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

import { UsersModule } from '../users/users.module';
import { TokensModule } from 'src/token/tokens.module';

@Module({
  imports: [UsersModule, TokensModule, PassportModule],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
