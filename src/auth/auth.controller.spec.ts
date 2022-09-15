import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { UserModel } from '../entity/UserModel';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { TokensModule } from '../token/tokens.module';
import { ConfigModule } from '@nestjs/config';

describe('AuthController', () => {
  let controller: AuthController;
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'newuser',
          password: 'password',
          database: 'lapalmera2',
          logging: true,
          entities: [UserModel],
        }),
        TypeOrmModule.forFeature([UserModel]),
        UsersModule,
        TokensModule,
        ConfigModule,
      ],
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  afterAll(async () => {
    module.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
