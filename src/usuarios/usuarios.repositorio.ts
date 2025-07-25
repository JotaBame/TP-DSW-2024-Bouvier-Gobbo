import { repositorio } from "../shared/repositorio";
import { Usuario } from "./usuarios.entidad";

const usuarios = [
    new Usuario(
        'pepe',
        'free',
        'pepepiola@gmail.com',
        76,
        175,
    ),
    new Usuario(
         'juan',
        'vip',
        'juanpiola@gmail.com',
        83,
        172,
    ),
]

export class usuarioRepositorio implements repositorio <Usuario>{
    public findAll(): Usuario[] | undefined {
        return usuarios
    }   

    public findOne(item: { id: string; }): Usuario | undefined {
        return usuarios.find((usuario) => usuario.name === item.id) 
    }

    public add(item: Usuario): Usuario | undefined {
        usuarios.push(item)
        return item
    } 

    public update(item: Usuario): Usuario | undefined {
        const usuarioname = usuarios.findIndex((usuario) => usuario.name === item.name) 

        if (usuarioname !== -1){ //lo encontró 
        usuarios[usuarioname] = { ...usuarios[usuarioname], ...item}
        }
        return usuarios[usuarioname]
    }

    public delete(item: { id: string; }): Usuario | undefined {
        const usuario_ = usuarios.findIndex((usuario) => usuario.name === item.id) 

        if (usuario_ !== -1){ //lo encontró
            usuarios.splice(usuario_, 1) // lo remueve
            return
        }
    }
}   
