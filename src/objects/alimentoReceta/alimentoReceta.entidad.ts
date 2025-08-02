export class AlimentoReceta {
  constructor(
    public id: number,
    public idAlimento: number,
    public idRecetaAsociada: number,
    public cantidadPorUnidad: number,
  ) {}
}
