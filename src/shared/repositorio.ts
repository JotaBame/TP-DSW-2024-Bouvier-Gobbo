//hace referencia a la base de datos

//genera la interfaz para el ORM y permite que todos los repositorios accedan a estos métodos
//la 'T' es de tipo
export interface repositorio<T>{
    findAll(): T[] | undefined
    findOne(item:{id:string}): T | undefined
    add(item:T): T | undefined
    update(item:T): T | undefined
    delete(item:{id:string}): T | undefined

}