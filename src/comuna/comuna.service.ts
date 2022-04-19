import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository, DeleteResult } from 'typeorm';

import { Comuna } from '../entity/Comuna';
import { ComunaDto } from '../dto/ComunaDto';

@Injectable()
export class ComunaService {
  constructor(
    @InjectRepository(Comuna)
    private readonly comunaRepository: Repository<Comuna>,
  ) {}

  async findAll(): Promise<Comuna[]> {
    return await this.comunaRepository.find();
  }

  async findByCodigoOrCodigoCiudad(
    codigo: string,
    codigoCiudad: string,
  ): Promise<Comuna[]> {
    console.log(
      `ComunaController findByCodigoOrCodigoCiudad comuna ${codigo} ciudad ${codigoCiudad}`,
    );
    return await this.comunaRepository.findBy({ codigo, codigoCiudad });
  }

  async save(comunaDto: ComunaDto): Promise<Comuna> {
    const comuna = new Comuna();
    comuna.codigo = comunaDto.codigo;
    comuna.nombre = comunaDto.nombre;
    comuna.codigoCiudad = comunaDto.codigoCiudad;
    return await this.comunaRepository.save(comuna);
  }

  // async update(comunaDto: ComunaDto): Promise<Comuna> {
  //   const comuna = new Comuna();
  //   comuna.codigo = comunaDto.codigo;
  //   comuna.nombre = comunaDto.nombre;
  //   comuna.codigoCiudad = comunaDto.codigoCiudad;
  //   return await this.comunaRepository.update(comuna.codigo, comuna);
  // }

  async delete(code: string): Promise<boolean> {
    const deleteResult: DeleteResult = await this.comunaRepository.delete(code);
    return deleteResult.affected > 0;
  }
}
