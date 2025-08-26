import { Entity, OneToMany, PrimaryKey, Property, Cascade, Rel, rel, Collection} from "@mikro-orm/core";
import { BaseEntity } from "../../shared/baseEntity.entity.js";
import { AlimentoNutrientes } from "../alimentoNutrientes/alimentoNutrientes.entidad.js";

@Entity()
export class Alimento extends BaseEntity {
  @PrimaryKey({})
  id!: number;

  @Property({ nullable: false })
  nombre!: string;

  @Property({ nullable: false })
  marca!: string;

  @Property({ nullable: false })
  presentacion!: File | null;

  @Property({ nullable: false })
  unidadMedida!: string;

  @OneToMany(
    () => AlimentoNutrientes,
    (alimentoNutriente) => alimentoNutriente.alimento,
    {
      cascade: [Cascade.ALL],
    }
  )
  alimentoNutrientes = new Collection<AlimentoNutrientes>(this);
}

 
