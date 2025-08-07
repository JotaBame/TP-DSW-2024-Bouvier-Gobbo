import { repositorio } from "../../shared/repositorio";
import { Nutriente } from "./nutriente.entidad.js";
import { pool } from "../../DB/conexiones-mysql.js";
import { ResultSetHeader, RowDataPacket } from "mysql2";

const nutrientes = [
    new Nutriente(
        1,
        "Proteína",
        "gramos"
    ),
]

export class nutrienteRepositorio implements repositorio<Nutriente> {
    public async findAll(): Promise<Nutriente[] | undefined> {
        const [nutrientes] = await pool.query('SELECT * FROM nutrientes');
        return nutrientes as Nutriente[];
    }
    public async findOne(item: { id: string; }): Promise<Nutriente | undefined> {
        const id = Number.parseInt(item.id);
        const [nutriente] = await pool.query('SELECT * FROM nutrientes WHERE id = ?', [id]);
        const nutrientes = nutriente as Nutriente[];
        if (nutrientes.length === 0) {
            return undefined;
        }
        return nutrientes[0] as Nutriente;
    }
    public async add(nutrienteInput: Nutriente): Promise<Nutriente | undefined> {
        const [result] = await pool.query<ResultSetHeader>('INSERT INTO nutrientes set ?', [nutrienteInput]);
        return nutrienteInput;
    }
    public async update(id:string,item: Nutriente): Promise<Nutriente | undefined> {
        const [result] = await pool.query<ResultSetHeader>('UPDATE nutrientes SET ? WHERE id = ?', [item, id]);
        if (result.affectedRows === 0) {
            return undefined;
        }
        return item;
    }
    public async delete(item: { id: string; }): Promise<Nutriente | undefined> {
        throw new Error("Method not implemented.");
    }
}
