import {
  Entity,
  OneToOne,
  Property,
  Cascade,
  ManyToOne,
  PrimaryKey,
} from '@mikro-orm/core';
 
import { Usuario } from '../usuarios/usuarios.entidad.js';
import { BaseEntity } from '../../shared/baseEntity.entity.js';
import { Receta } from '../receta/receta.entidad.js';

@Entity()
export class Objetivo extends BaseEntity {
  @PrimaryKey()
  id!: number;

  @OneToOne(() => Usuario, (usuario) => usuario.id, { nullable: false })
  usuario!: Usuario;

  @ManyToOne(() => Receta, { nullable: false, cascade: [Cascade.ALL] })
  recetas!: Receta[];

  @Property()
  pesoDeseado!: number;

  @Property()
  fechaInicio!: Date;

  @Property()
  fechaFin!: Date;

}

 
