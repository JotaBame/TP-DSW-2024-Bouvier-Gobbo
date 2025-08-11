
import { repositorio } from "../../shared/repositorio";
import { Receta } from "./receta.entidad";
import { pool } from "../../DB/conexiones-mysql";
import { ResultSetHeader, RowDataPacket } from "mysql2";

 

export class recetaRepositorio implements repositorio<Receta> {
    public async findAll(): Promise<Receta[] | undefined> {
        const [recetas] = await pool.query('SELECT * FROM receta');
        return recetas as Receta[];
    }
    public async findOne(item: { id: string; }): Promise<Receta | undefined> {
        const id = Number.parseInt(item.id);
        const [receta] = await pool.query('SELECT * FROM receta WHERE id = ?', [id]);
        const recetas = receta as Receta[];
        if (recetas.length === 0) {
            return undefined;
        }
        return recetas[0] as Receta;
    }
    public async add(recetaInput: Receta): Promise<Receta | undefined> {
        const [result] = await pool.query<ResultSetHeader>('INSERT INTO receta set ?', [recetaInput]);
        return recetaInput;
    }
    public async update(id:string, item: Receta): Promise<Receta | undefined> {
        throw new Error("Method not implemented.");
    }
    public async delete(item: { id: string; }): Promise<Receta | undefined> {
        throw new Error("Method not implemented.");
    }
}
