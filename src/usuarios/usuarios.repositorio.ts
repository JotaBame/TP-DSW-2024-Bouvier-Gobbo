import { repositorio } from "../shared/repositorio"
import { Usuario } from "./usuarios.entidad.js"
import { pool } from "../DB/conexiones-mysql.js"
import { ResultSetHeader, RowDataPacket } from "mysql2"



const usuarios = [
    new Usuario(
        1,
        'pepe',
        'free',
        'pepepiola@gmail.com',
        76,
        175,
        
    ),
]


export class usuarioRepositorio implements repositorio <Usuario>{
    //async permite que se sigan ejecutando otras funciones mientras se espera la respuesta de esta funcion
    public async findAll(): Promise<Usuario[] | undefined> {
        //Devuelve una query de sql donde ejeuta el select y lo devuelve en forma de un array
        const [usuarios] = await pool.query('SELECT * FROM usuarios')
        return usuarios as Usuario[]
    }   

    public async findOne(item: { id:string; }): Promise<Usuario | undefined> {
        //Convierto el id a un numero entero
        const id= Number.parseInt(item.id)
        //el signo de pregunta es reemplazado por los valores pasados en el array (item.id),evita inyecciones sql maliciosas
        const [usuario] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        // se convierte el array de filas en una de usuarios pues, el query no sabe que está devolviendo solo una fila
        const usuarios = usuario as Usuario[]
        if (usuarios.length === 0) {
            return undefined
        }
        return usuarios[0] as Usuario
    }

    public async add(usuarioInput: Usuario): Promise<Usuario | undefined> {
        //de esta forma id queda como undefined (ya que es numerico secuencial) y el resto si se solicita
        const {id, ...resto} = usuarioInput
        //nos devuelve una lista con atributos
        const [result] = await pool.query<ResultSetHeader>('INSERT INTO usuarios set ?',[resto])
        //el result sirve para que typeScript  pueda interpretar el tipo de dato que devuelve la consulta
        usuarioInput.id = result.insertId; // asigna el id generado por la base de datos
        return usuarioInput;
    } 

    public async update(id: string, usuarioInput: Usuario): Promise<Usuario | undefined> {
        const usuarioID = Number.parseInt(id)
        const [result] = await pool.query<ResultSetHeader>('UPDATE usuarios SET ? WHERE id = ?', [usuarioInput, usuarioID]);
        if (result.affectedRows === 0) {
            return undefined;
        }
        return usuarioInput;
    }

    public async delete(item: { id: string; }): Promise<Usuario | undefined> {
        const id = Number.parseInt(item.id)
        const [result] = await pool.query<ResultSetHeader>('DELETE FROM usuarios WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return undefined;
        }
        return { id } as Usuario;
    }
}
