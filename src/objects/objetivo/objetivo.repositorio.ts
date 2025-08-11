import { repositorio } from "../../shared/repositorio";
import { Objetivo } from "./objetivo.entidad.js";
import { pool } from "../../DB/conexiones-mysql.js";
import { ResultSetHeader, RowDataPacket } from "mysql2";

 
export class objetivoRepositorio implements repositorio <Objetivo>{
    public async findAll(): Promise<Objetivo[] | undefined> {
         const [objetivos] = await pool.query('SELECT * FROM objetivos');
        return objetivos as Objetivo[];
    }
    public async findOne(item: { id: string; }): Promise<Objetivo | undefined> {
        const id = Number.parseInt(item.id);
        const [objetivo] = await pool.query('SELECT * FROM objetivos WHERE id = ?', [id]);
        const objetivos = objetivo as Objetivo[];
        return objetivos[0] as Objetivo;
    }
    public async add(objetivoInput: Objetivo): Promise<Objetivo | undefined> {
        const [result] = await pool.query<ResultSetHeader>('INSERT INTO objetivos set ?', [objetivoInput]);
        objetivoInput.id = result.insertId;
        return objetivoInput;
    }
    public async update(id:string, item: Objetivo): Promise<Objetivo | undefined> {
        const [result] = await pool.query<ResultSetHeader>('UPDATE objetivos SET ? WHERE idObjetivo = ?', [item, id]);
        if (result.affectedRows === 0) {
            return undefined;
        }
        return item;
 
    }
    public async delete(item: { id: string; }): Promise<Objetivo | undefined> {
        throw new Error("Method not implemented.");
    }
}
