import { AlimentoReceta } from "../alimentoReceta/alimentoReceta.entidad.js";

export class Receta {
  constructor(
    public id: number,
    public nombre: string,
    public Descripcion: string,
    public idAutor: number,
    public idAlimentosReceta: number[],
    
  ) {}
}
