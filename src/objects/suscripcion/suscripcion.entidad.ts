import {
  Entity,
   Property,
 Cascade,
  PrimaryKey,
  ManyToOne,
  OneToOne,
} from '@mikro-orm/core';
 
import { BaseEntity } from '../../shared/baseEntity.entity.js';
import { CategoriaSuscripcion } from '../categoria/categoria.entidad.js';
import { Usuario } from '../usuarios/usuarios.entidad.js';
 
@Entity()
export class Suscripcion extends BaseEntity {
  @OneToOne(() => CategoriaSuscripcion, {
    nullable: false,
    cascade: [Cascade.ALL],
  })
  categoria!: CategoriaSuscripcion;

  @OneToOne(() => CategoriaSuscripcion, {
    nullable: false,
    cascade: [Cascade.ALL],
  })
  usuario!: Usuario;

  @Property()
  fechaSuscripcion!: Date;

  @Property()
  fechaVencimiento!: Date;

  @PrimaryKey()
  id!: number;
}