import {
  Entity,
  Property,
  PrimaryKey,
  OneToMany,
  Cascade,
  Collection
} from '@mikro-orm/core';
 import { BaseEntity } from '../../shared/baseEntity.entity.js';
 @Entity()
export class Nutriente extends BaseEntity {
  @PrimaryKey({})
  id!: number;

  @Property()
  nombre!: string;

  @Property()
  unidadMedida!: string;
 
}