//hace referencia a la base de datos

import { promises } from "dns"

//genera la interfaz para el ORM y permite que todos los repositorios accedan a estos métodos
//la 'T' es de tipo
export interface repositorio<T>{
    findAll():Promise<T[] | undefined>
    findOne(item:{id:string}): Promise<T | undefined>
    add(item:T): Promise<T | undefined>
    update(item:T): Promise<T | undefined>
    delete(item:{id:string}): Promise<T | undefined>

}