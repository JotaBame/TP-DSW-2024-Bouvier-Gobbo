import {
  Entity,
  OneToOne,
  Property,
  Cascade,
  ManyToOne,
  PrimaryKey,
} from '@mikro-orm/core';
 
 import { BaseEntity } from '../../shared/baseEntity.entity.js';
 
@Entity()
export class Usuario extends BaseEntity {
  @PrimaryKey()
  id!: number;

  @Property()
  nombre!: string;

  @Property()
  email!: string;
  @Property()
  peso!: number;

  @Property()
  altura!: number;

  @Property()
  fechaRegistro!: Date;
}
 