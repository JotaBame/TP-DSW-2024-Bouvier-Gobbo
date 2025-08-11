import {
  Entity,
  OneToOne,
  Property,
  Cascade,
  Rel,
  ManyToOne,
} from '@mikro-orm/core';
import { Nutriente } from '../nutriente/nutriente.entidad.js';
import { Alimento } from '../alimentos/alimento.entidad.js';
import { BaseEntity } from '../../shared/baseEntity.entity.js';

@Entity()
export class AlimentoNutrientes extends BaseEntity {
  @OneToOne(() => Alimento, (alimento) => alimento.alimentoNutrientes, { nullable: false })
  alimento!: Rel<Alimento>;

  @ManyToOne(() => Nutriente, { nullable: false, cascade: [Cascade.ALL] })
  nutriente!: Rel<Nutriente>;

  @Property()
  cantidadNutriente!: number;
}
