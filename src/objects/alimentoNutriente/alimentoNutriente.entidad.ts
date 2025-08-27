import {
  Entity,
  PrimaryKeyProp,
  Property,
  Cascade,
  Rel,
  ManyToOne,
  OneToMany,
} from '@mikro-orm/core';
import { Nutriente } from '../nutriente/nutriente.entidad.js';
import { Alimento } from '../alimentos/alimento.entidad.js';
import { BaseEntity } from '../../shared/baseEntity.entity.js';

@Entity()
export class alimentoNutriente extends BaseEntity{
  @ManyToOne(() => Alimento, { nullable: false, primary: true })
  alimento!: Rel<Alimento>;

  @ManyToOne(() => Nutriente, { nullable: false, primary: true })
  nutriente!: Rel<Nutriente>;

  @Property()
  cantidadNutriente!: number;
}