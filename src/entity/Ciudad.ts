import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Ciudad {
  @PrimaryColumn({ name: 'CODIGOCIUDAD' })
  codigo: string;

  @Column({ name: 'NOMBRECIUDAD' })
  nombre: string;

  @Column({ name: 'CODIGOREGION' })
  codigoRegion: string;
}
