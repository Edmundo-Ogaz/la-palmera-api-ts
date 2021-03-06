import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TokensModule } from './token/tokens.module';
import { ComunaModule } from './comuna/comuna.module';

import { JwtAuthGuard } from './auth/jwt-auth.guard';

import { UserModel } from './entity/UserModel';
import { Comuna } from './entity/Comuna';
import { CiudadModule } from './ciudad/ciudad.module';
import { Ciudad } from './entity/Ciudad';

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
      database: 'lapalmera2',
      logging: true,
      entities: [UserModel, Comuna, Ciudad],
      //autoLoadEntities: true,
      //synchronize: true,
    }),
    ComunaModule,
    CiudadModule,
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
