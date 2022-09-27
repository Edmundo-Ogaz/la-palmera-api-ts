import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Region } from '../entity/Region';

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(Region)
    private readonly regionRepository: Repository<Region>,
  ) {}

  async findAll(): Promise<Region[]> {
    const regions: Array<Region> = await this.regionRepository.find();
    return regions;
  }
}
