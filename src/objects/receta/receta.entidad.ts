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
import { AlimentoReceta } from '../alimentoReceta/alimentoReceta.entidad.js';
 
@Entity()
export class Receta extends BaseEntity {

 @OneToOne(() => Usuario)
  autor!: Usuario;

  @ManyToOne(() => AlimentoReceta, { nullable: false, cascade: [Cascade.ALL] })
  alimentos!: AlimentoReceta[];

  @Property()
  descripcion!: string;

  @Property()
  nombre!: string;

  @Property()
  fechaModificacion!: Date;

}
