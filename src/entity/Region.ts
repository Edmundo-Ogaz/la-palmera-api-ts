import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Region {
  @PrimaryColumn({ name: 'CODIGOREGION' })
  codigo: string;

  @Column({ name: 'NOMBREREGION' })
  nombre: string;
}
