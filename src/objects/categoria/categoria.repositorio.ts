
import { repositorio } from "../../shared/repositorio";
import { CategoriaSuscripcion } from "./categoria.entidad.js";

const categorias: CategoriaSuscripcion[] = [
 
];

export class categoriaRepositorio implements repositorio<CategoriaSuscripcion> {
    async findAll(): Promise<CategoriaSuscripcion[] | undefined> {
        return categorias;
    }
    async findOne(item: { id: string; }): Promise<CategoriaSuscripcion | undefined> {
        const id = Number(item.id);
        return categorias.find(c => c.id === id);
    }
    async add(categoria: CategoriaSuscripcion): Promise<CategoriaSuscripcion | undefined> {
        categoria.id = categorias.length + 1;
        categorias.push(categoria);
        return categoria;
    }
    async update(id:string, categoria: CategoriaSuscripcion): Promise<CategoriaSuscripcion | undefined> {
        const idx = categorias.findIndex(c => c.id === categoria.id);
        if (idx === -1) return undefined;
        categorias[idx] = categoria;
        return categoria;
    }
    async delete(item: { id: string; }): Promise<CategoriaSuscripcion | undefined> {
        const idx = categorias.findIndex(c => c.id === Number(item.id));
        if (idx === -1) return undefined;
        const [deleted] = categorias.splice(idx, 1);
        return deleted;
    }
}
