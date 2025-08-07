import crypto from 'node:crypto'
import { AlimentoNutriente as AlimentoNutrientes } from '../alimentoNutrientes/alimentoNutrientes.entidad.js';

export class Alimento {
  constructor(
    public id: number,
    public nombre: string,
    public marca: string,
    public presentacion: File | null,
    public unidadMedida: string,
    public alimentoNutrientes: AlimentoNutrientes | null
  ) {}
}
