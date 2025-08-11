import {
  Entity,
  OneToOne,
  Property,
  Cascade,
  Rel,
  ManyToOne,
  PrimaryKey,
} from '@mikro-orm/core';
 import { Alimento } from '../alimentos/alimento.entidad.js';
import { BaseEntity } from '../../shared/baseEntity.entity.js';
import { Receta } from '../receta/receta.entidad.js';

@Entity()
export class AlimentoReceta extends BaseEntity {
  @PrimaryKey()
  id!: number;

  @OneToOne(() => Alimento, { nullable: false })
  alimento!: Rel<Alimento>;

  @ManyToOne(() => Receta, { nullable: false, cascade: [Cascade.ALL] })
  receta!: Rel<Receta>;

  @Property()
  cantidadPorUnidad!: number;
}


 
