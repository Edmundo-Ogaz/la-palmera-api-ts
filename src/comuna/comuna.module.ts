import { Module } from '@nestjs/common';
import { ComunaService } from './comuna.service';

@Module({
  providers: [ComunaService]
})
export class ComunaModule {}
