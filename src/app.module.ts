import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TokensModule } from './token/tokens.module';
import { ComunaModule } from './comuna/comuna.module';
import { CiudadModule } from './ciudad/ciudad.module';

import { JwtAuthGuard } from './auth/jwt-auth.guard';

import { UserModel } from './entity/UserModel';
import { Comuna } from './entity/Comuna';
import { Ciudad } from './entity/Ciudad';

import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    TokensModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
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
