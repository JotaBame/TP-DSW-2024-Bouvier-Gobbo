import {
  Entity,
   Property,
 
  PrimaryKey,
} from '@mikro-orm/core';
 
import { BaseEntity } from '../../shared/baseEntity.entity.js';
 
@Entity()
export class CategoriaSuscripcion extends BaseEntity {
  @PrimaryKey()
  id!: number;

  @Property()
  nombre!: string;

  @Property()
  descripcion!: string;
 
}

 
