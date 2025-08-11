import {
  Entity,
   Property,
 Cascade,
  PrimaryKey,
  ManyToOne,
} from '@mikro-orm/core';
 
import { BaseEntity } from '../../shared/baseEntity.entity.js';
import { CategoriaSuscripcion } from '../categoria/categoria.entidad.js';
 
@Entity()
export class Precio extends BaseEntity {
  @ManyToOne(() => CategoriaSuscripcion, { nullable: false, cascade: [Cascade.ALL] })
  categoria!: CategoriaSuscripcion;

  @Property()
  valor!: number;

  @Property()
  fecha!: Date;

}