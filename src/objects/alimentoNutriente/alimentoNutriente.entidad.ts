export class AlimentoNutriente {
  constructor(
    public id: number,
    public idAlimento: number,
    public idNutriente: number[],
    public cantidad: number
  ) {}
}
