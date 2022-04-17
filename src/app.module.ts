import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/User';
import { TokensModule } from './token/tokens.module';
import { ComunaModule } from './comuna/comuna.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TokensModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'newuser',
      password: 'password',
      database: 'test',
      logging: true,
      entities: [User],
      //autoLoadEntities: true,
      //synchronize: true,
    }),
    ComunaModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
