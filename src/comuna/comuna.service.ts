import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Comuna } from 'src/entity/Comuna';
import { Repository } from 'typeorm';

@Injectable()
export class ComunaService {
  constructor(
    @InjectRepository(Comuna)
    private readonly comunaRepository: Repository<Comuna>,
  ) {}

  async findAll(): Promise<Comuna[]> {
    return await this.comunaRepository.find();
  }
}
