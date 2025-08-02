import { repositorio } from "../../shared/repositorio";
import { AlimentoReceta } from "./alimentoReceta.entidad";
import { pool } from "../../DB/conexiones-mysql";
import { ResultSetHeader, RowDataPacket } from "mysql2";

const alimentoRecetas = [
    new AlimentoReceta(1, 1, 1, 100),
];

export class alimentoRecetaRepositorio implements repositorio<AlimentoReceta> {
    public async findAll(): Promise<AlimentoReceta[] | undefined> {
        const [alimentoRecetas] = await pool.query('SELECT * FROM alimentoReceta');
        return alimentoRecetas as AlimentoReceta[];
    }
    public async findOne(item: { id: string; }): Promise<AlimentoReceta | undefined> {
        const id = Number.parseInt(item.id);
        const [alimentoReceta] = await pool.query('SELECT * FROM alimentoReceta WHERE id = ?', [id]);
        const alimentoRecetas = alimentoReceta as AlimentoReceta[];
        if (alimentoRecetas.length === 0) {
            return undefined;
        }
        return alimentoRecetas[0] as AlimentoReceta;
    }
    public async add(alimentoRecetaInput: AlimentoReceta): Promise<AlimentoReceta | undefined> {
        const [result] = await pool.query<ResultSetHeader>('INSERT INTO alimentoReceta set ?', [alimentoRecetaInput]);
        return alimentoRecetaInput;
    }
    public async update(item: AlimentoReceta): Promise<AlimentoReceta | undefined> {
        throw new Error("Method not implemented.");
    }
    public async delete(item: { id: string; }): Promise<AlimentoReceta | undefined> {
        throw new Error("Method not implemented.");
    }
}
