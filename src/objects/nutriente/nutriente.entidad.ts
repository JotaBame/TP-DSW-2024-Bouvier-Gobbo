import {
  Entity,
  Property,
  PrimaryKey,
  OneToMany,
  Cascade,
  Collection
} from '@mikro-orm/core';
 import { BaseEntity } from '../../shared/baseEntity.entity.js';
 import { AlimentoNutrientes } from '../alimentoNutrientes/alimentoNutrientes.entidad.js';

@Entity()
export class Nutriente extends BaseEntity {
  @PrimaryKey()
  id!: number;

  @Property()
  nombre!: string;

  @Property()
  unidadMedida!: string;


    @OneToMany(
      () => AlimentoNutrientes,
      (alimentoNutriente) => alimentoNutriente.nutriente,
      {
        cascade: [Cascade.ALL],
      }
    )
    alimentoNutrientes = new Collection<AlimentoNutrientes>(this);
}