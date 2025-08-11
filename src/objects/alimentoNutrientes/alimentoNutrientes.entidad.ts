import {
  Entity,
  OneToOne,
  Property,
  Cascade,
  ManyToOne,
} from '@mikro-orm/core';
import { Nutriente } from '../nutriente/nutriente.entidad.js';
import { Alimento } from '../alimentos/alimento.entidad.js';
import { BaseEntity } from '../../shared/baseEntity.entity.js';

@Entity()
export class AlimentoNutrientes extends BaseEntity {
  @OneToOne(() => Alimento, (alimento) => alimento.id, { nullable: false })
  alimento!: Alimento;

  @ManyToOne(() => Nutriente, { nullable: false, cascade: [Cascade.ALL] })
  nutriente!: Nutriente;

  @Property()
  cantidadNutriente!: number;
}
