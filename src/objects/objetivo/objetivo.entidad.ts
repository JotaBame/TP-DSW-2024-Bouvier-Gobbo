export class Objetivo {
    constructor(
        public idObjetivo: number,
        public idUsuario: number,
        public pesoDeseado: number,
        public fechaInicio: Date,
        public fechaFin: Date,
        public recetasObjetivo: number[]
    ) {}
}
