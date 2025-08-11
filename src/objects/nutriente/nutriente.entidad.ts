import {
  Entity,
  Property,
  PrimaryKey,
} from '@mikro-orm/core';
 import { BaseEntity } from '../../shared/baseEntity.entity.js';
 
@Entity()
export class Nutriente extends BaseEntity {
  @PrimaryKey()
  id!: number;

  @Property()
  nombre!: string;

  @Property()
  unidadMedida!: string;

}