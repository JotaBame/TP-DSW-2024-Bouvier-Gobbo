import crypto from 'node:crypto'

export class Alimento{ 
  constructor(
    public nombre: string, 
    public marca: string, 
    public presentacion: File | null, 
    public unidadMedida: string,
   )
    {}
}