import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Comuna {
  @PrimaryColumn({ name: 'CODIGOCOMUNA' })
  codigo: string;

  @Column({ name: 'NOMBRECOMUNA' })
  nombre: string;

  @Column({ name: 'CODIGOCIUDAD' })
  codigoCiudad: string;
}
