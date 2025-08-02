import { repositorio } from "../shared/repositorio";
import { Objetivo } from "./objetivo.entidad.js";
import { pool } from "../DB/conexiones-mysql.js";
import { ResultSetHeader, RowDataPacket } from "mysql2";

const objetivos = [
    new Objetivo(
        1, // idObjetivo
        1, // idUsuario
        70, // pesoDeseado
        new Date('2025-08-01'), // fechaInicio
        new Date('2025-12-31') // fechaFin
    ),
]

export class objetivoRepositorio implements repositorio <Objetivo>{
    public async findAll(): Promise<Objetivo[] | undefined> {
        const [objetivos] = await pool.query('SELECT * FROM objetivos');
        // Mapear fechas a objetos Date si es necesario
        return objetivos as Objetivo[];
    }
    public async findOne(item: { id: string; }): Promise<Objetivo | undefined> {
        const id = Number.parseInt(item.id);
        const [objetivo] = await pool.query('SELECT * FROM objetivos WHERE idObjetivo = ?', [id]);
        const objetivos = objetivo as Objetivo[];
        if (objetivos.length === 0) {
            return undefined;
        }
         return objetivos[0] as Objetivo;
    }
    public async add(objetivoInput: Objetivo): Promise<Objetivo | undefined> {
        const { idObjetivo, ...resto } = objetivoInput;
        const [result] = await pool.query<ResultSetHeader>('INSERT INTO objetivos set ?', [resto]);
        objetivoInput.idObjetivo = result.insertId;
        return objetivoInput;
    }
    public async update(item: Objetivo): Promise<Objetivo | undefined> {
        throw new Error("Method not implemented.");
    }
    public async delete(item: { id: string; }): Promise<Objetivo | undefined> {
        throw new Error("Method not implemented.");
    }
}
