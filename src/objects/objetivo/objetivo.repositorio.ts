import { repositorio } from "../../shared/repositorio";
import { Objetivo } from "./objetivo.entidad.js";
import { pool } from "../../DB/conexiones-mysql.js";
import { ResultSetHeader, RowDataPacket } from "mysql2";

const objetivos = [
    new Objetivo(
        1, // idObjetivo
        1, // idUsuario
        70, // pesoDeseado
        new Date('2025-08-01'), // fechaInicio
        new Date('2025-12-31'), // fechaFin
        [1,2,3] // recetasObjetivo ejemplo
    ),
]

export class objetivoRepositorio implements repositorio <Objetivo>{
    public async findAll(): Promise<Objetivo[] | undefined> {
        // NOTA: recetasObjetivo debería obtenerse de una tabla relacional, aquí es mock
        return objetivos;
    }
    public async findOne(item: { id: string; }): Promise<Objetivo | undefined> {
        const id = Number.parseInt(item.id);
        return objetivos.find(o => o.idObjetivo === id);
    }
    public async add(objetivoInput: Objetivo): Promise<Objetivo | undefined> {
        objetivoInput.idObjetivo = objetivos.length + 1;
        objetivos.push(objetivoInput);
        return objetivoInput;
    }
    public async update(item: Objetivo): Promise<Objetivo | undefined> {
        const idx = objetivos.findIndex(o => o.idObjetivo === item.idObjetivo);
        if (idx === -1) return undefined;
        objetivos[idx] = item;
        return item;
    }
    public async delete(item: { id: string; }): Promise<Objetivo | undefined> {
        throw new Error("Method not implemented.");
    }
}
