import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Ciudad } from '../entity/Ciudad';
import { CiudadService } from './ciudad.service';
import { CiudadController } from './ciudad.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Ciudad])],
  controllers: [CiudadController],
  providers: [CiudadService],
})
export class CiudadModule {}
