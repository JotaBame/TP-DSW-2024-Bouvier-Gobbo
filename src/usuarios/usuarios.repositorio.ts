import { repositorio } from "../shared/repositorio";
import { Usuario } from "./usuarios.entidad.js";
import { pool } from "../DB/conexiones-mysql.js";



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
    //asyn permite que se sigan ejecutando otras funciones mientras se espera la respuesta de esta funcion
    public async findAll(): Promise<Usuario[] | undefined> {
        //Devuelve una query de sql donde ejeuta el select y lo devuelve en forma de un array
        const [usuarios] = await pool.query('SELECT * FROM usuarios');
        return usuarios as Usuario[];
    }   

    public async findOne(item: { id:string; }): Promise<Usuario | undefined> {
        //Convierte el id a un numero entero
        const id= Number.parseInt(item.id);
        //el signo de pregunta es reemplazado por los valores pasados en el array (item.id),evita inyecciones sql maliciosas
        const [usuario] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        // se convierte el array de filas en una de usuarios
        const usuarios = usuario as Usuario[];
        if (usuarios.length === 0) {
            return undefined; // Si no se encuentra el usuario, devuelve undefined
        }
        return usuarios[0];
    }

    public async add(item: Usuario): Promise<Usuario | undefined> {
        throw new Error("Method not implemented.");
    } 

    public async update(item: Usuario): Promise<Usuario | undefined> {
        throw new Error("Method not implemented.");
    }

    public async delete(item: { id: string; }): Promise<Usuario | undefined> {
        throw new Error("Method not implemented.");
    }
}
