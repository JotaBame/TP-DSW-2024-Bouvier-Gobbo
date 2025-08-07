import { repositorio } from "../../shared/repositorio";
import { Alimento } from "./alimento.entidad.js";
import { pool } from "../../DB/conexiones-mysql.js";
import { ResultSetHeader } from "mysql2";

const alimentos = [
    new Alimento(
        1,
        "Arandanos",
        "Arcor",
        null,
        "gramos"
    ),
]

export class alimentoRepositorio implements repositorio<Alimento> {
    public async findAll(): Promise<Alimento[] | undefined> {
        const [alimentos] = await pool.query('SELECT * FROM alimentos');
        return alimentos as Alimento[];
    }
     
    
    public async findOne(item: { id: string; }): Promise<Alimento | undefined> {
        
      const id= Number.parseInt(item.id);
      const [alimento] = await pool.query('SELECT * FROM alimentos WHERE id = ?', [id]);
        const alimentos = alimento as Alimento[];
        if (alimentos.length === 0) {
            return undefined;
        }
        return alimentos[0] as Alimento;
    }
    public async add(alimentoInput: Alimento): Promise<Alimento | undefined> {
        const [result] = await pool.query<ResultSetHeader>('INSERT INTO alimentos set ?', [alimentoInput]);
        return alimentoInput;
    }
    public async update(id: string, alimentoInput: Alimento): Promise<Alimento | undefined> {
        const alimentoID = Number.parseInt(id);
        const [result] = await pool.query<ResultSetHeader>('UPDATE alimentos SET ? WHERE id = ?', [alimentoInput, alimentoID]);
        if (result.affectedRows === 0) {
            return undefined;
        }
        return alimentoInput;
    }
    public async delete(item: { id: string; }): Promise<Alimento | undefined> {
        throw new Error("Method not implemented.");
    }
}
