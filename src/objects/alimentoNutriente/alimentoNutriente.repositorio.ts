import { repositorio } from "../../shared/repositorio";
import { AlimentoNutriente } from "./alimentoNutriente.entidad";
import { pool } from "../../DB/conexiones-mysql";

import { ResultSetHeader, RowDataPacket } from "mysql2";

const alimentoNutrientes = [
    new AlimentoNutriente(
        1, // id
        1, // idAlimento
        [1, 2], // idNutriente
        100 // cantidad
    ),
];

export class alimentoNutrienteRepositorio implements repositorio<AlimentoNutriente> {
    public async findAll(): Promise<AlimentoNutriente[] | undefined> {
        const [alimentoNutrientes] = await pool.query('SELECT * FROM alimentoNutriente');
        return alimentoNutrientes as AlimentoNutriente[];
    }
    public async findOne(item: { id: string; }): Promise<AlimentoNutriente | undefined> {
        const id = Number.parseInt(item.id);
        const [alimentoNutriente] = await pool.query('SELECT * FROM alimentoNutriente WHERE id = ?', [id]);
        const alimentoNutrientes = alimentoNutriente as AlimentoNutriente[];
        if (alimentoNutrientes.length === 0) {
            return undefined;
        }
        return alimentoNutrientes[0] as AlimentoNutriente;
    }
    public async add(alimentoNutrienteInput: AlimentoNutriente): Promise<AlimentoNutriente | undefined> {
        const [result] = await pool.query<ResultSetHeader>('INSERT INTO alimentoNutriente set ?', [alimentoNutrienteInput]);
        return alimentoNutrienteInput;
    }
    public async update(item: AlimentoNutriente): Promise<AlimentoNutriente | undefined> {
        throw new Error("Method not implemented.");
    }
    public async delete(item: { id: string; }): Promise<AlimentoNutriente | undefined> {
        throw new Error("Method not implemented.");
    }
}
