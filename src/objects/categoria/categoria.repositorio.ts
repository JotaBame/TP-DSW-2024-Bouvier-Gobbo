
import { repositorio } from "../../shared/repositorio";
import { Categoria } from "./categoria.entidad.js";

const categorias: Categoria[] = [
 
];

export class categoriaRepositorio implements repositorio<Categoria> {
    async findAll(): Promise<Categoria[] | undefined> {
        return categorias;
    }
    async findOne(item: { id: string; }): Promise<Categoria | undefined> {
        const id = Number(item.id);
        return categorias.find(c => c.id === id);
    }
    async add(categoria: Categoria): Promise<Categoria | undefined> {
        categoria.id = categorias.length + 1;
        categorias.push(categoria);
        return categoria;
    }
    async update(id:string, categoria: Categoria): Promise<Categoria | undefined> {
        const idx = categorias.findIndex(c => c.id === categoria.id);
        if (idx === -1) return undefined;
        categorias[idx] = categoria;
        return categoria;
    }
    async delete(item: { id: string; }): Promise<Categoria | undefined> {
        const idx = categorias.findIndex(c => c.id === Number(item.id));
        if (idx === -1) return undefined;
        const [deleted] = categorias.splice(idx, 1);
        return deleted;
    }
}
