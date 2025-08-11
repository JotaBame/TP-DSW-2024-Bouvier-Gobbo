import {
  Entity,
  OneToOne,
  Property,
  Cascade,
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

  @OneToOne(() => Alimento, (alimento) => alimento.id, { nullable: false })
  alimento!: Alimento;

  @ManyToOne(() => Receta, { nullable: false, cascade: [Cascade.ALL] })
  receta!: Receta;
  
  @Property()
  cantidadPorUnidad!: number;
}


 
