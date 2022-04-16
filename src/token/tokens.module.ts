import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { TokensService } from './tokens.service';

import { jwtConstants } from './constants';
import { TokensController } from './tokens.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [TokensController],
  providers: [TokensService],
  exports: [TokensService],
})
export class TokensModule {}
