import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { UserModel } from '../entity/UserModel';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
  ) {}

  async findAll(): Promise<UserModel[]> {
    return await this.userRepository.find();
  }

  async findOne(username: string): Promise<UserModel> {
    return await this.userRepository.findOneBy({ username });
  }
}
