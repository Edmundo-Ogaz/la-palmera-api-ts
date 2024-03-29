import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Ciudad } from '../entity/Ciudad';

@Injectable()
export class CiudadService {
  constructor(
    @InjectRepository(Ciudad)
    private readonly cityRepository: Repository<Ciudad>,
  ) {}

  async findAll(): Promise<Ciudad[]> {
    const cities: Array<Ciudad> = await this.cityRepository.find();
    return cities;
  }

  async findByCodigoOrCodigoRegion(
    codigo: string,
    codigoRegion: string,
  ): Promise<Ciudad[]> {
    console.log(
      `CiudadController findByCodigoOrCodigoRegion ciudad ${codigo} region ${codigoRegion}`,
    );
    return await this.cityRepository.findBy({ codigo, codigoRegion });
  }
}
