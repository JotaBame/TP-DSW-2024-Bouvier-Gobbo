import { repositorio } from "../../shared/repositorio";
import { AlimentoNutrientes } from "./alimentoNutrientes.entidad";
import { pool } from "../../DB/conexiones-mysql";

import { ResultSetHeader, RowDataPacket } from "mysql2";

 

export class alimentoNutrienteRepositorio implements repositorio<AlimentoNutrientes> {
    public async findAll(): Promise<AlimentoNutrientes[] | undefined> {
        const [alimentoNutrientes] = await pool.query('SELECT * FROM alimentoNutriente');
        return alimentoNutrientes as AlimentoNutrientes[];
    }
    public async findOne(item: { id: string; }): Promise<AlimentoNutrientes | undefined> {
        const id = Number.parseInt(item.id);
        const [alimentoNutriente] = await pool.query('SELECT * FROM alimentoNutriente WHERE id = ?', [id]);
        const alimentoNutrientes = alimentoNutriente as AlimentoNutrientes[];
        if (alimentoNutrientes.length === 0) {
            return undefined;
        }
        return alimentoNutrientes[0] as AlimentoNutrientes;
    }
    public async add(alimentoNutrienteInput: AlimentoNutrientes): Promise<AlimentoNutrientes | undefined> {
        const [result] = await pool.query<ResultSetHeader>('INSERT INTO alimentoNutriente set ?', [alimentoNutrienteInput]);
        return alimentoNutrienteInput;
    }
    public async update(id:string, item: AlimentoNutrientes): Promise<AlimentoNutrientes | undefined> {
        throw new Error("Method not implemented.");
    }
    public async delete(item: { id: string; }): Promise<AlimentoNutrientes | undefined> {
        throw new Error("Method not implemented.");
    }
}
