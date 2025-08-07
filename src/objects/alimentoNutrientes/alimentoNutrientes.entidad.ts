import { Entity, OneToMany, OneToOne, PrimaryKey, Property, Cascade } from "@mikro-orm/core";
import { Nutriente } from "../nutriente/nutriente.entidad.js";
import { Alimento } from "../alimentos/alimento.entidad.js";
import { BaseEntity } from "../../shared/baseEntity.entity.js";

@Entity()
export class AlimentoNutriente extends BaseEntity {

  
  @OneToOne(() => Alimento, (alimento) => alimento.id, { nullable: false })
@Property({ nullable: false, unique: true})
  idAlimento!: number;
@OneToMany(() => Nutriente, (nutriente) => nutriente.id, { cascade: [Cascade.ALL] })
  idNutriente!: number[];
@Property()
  cantidad!: number;

  
}
