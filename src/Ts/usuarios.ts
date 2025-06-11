import crypto from 'node:crypto'

export class Usuario{
    constructor(
        public name:string,
        public type:string, 
        public mail:string,
        public peso: number,
        public altura: number,
        ){}
}  