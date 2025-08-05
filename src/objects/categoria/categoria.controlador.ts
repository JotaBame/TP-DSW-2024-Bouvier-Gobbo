
import { Request, Response, NextFunction } from "express";
import { categoriaRepositorio } from "./categoria.repositorio.js";

const repositorio = new categoriaRepositorio();

export function sanitizeCategoriaInput(req: Request, res: Response, next: NextFunction) {
    req.body.sanitizedInput = {
        id: req.body.id,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    };
    next();
}

export async function findAll(req: Request, res: Response) {
    const categorias = await repositorio.findAll();
    res.json({ categorias });
}

export async function findOne(req: Request, res: Response) {
    const categoria = await repositorio.findOne({ id: req.params.id });
    if (!categoria) {
        res.status(404).send({ message: 'Categoría no encontrada' });
        return;
    }
    res.json(categoria);
}

export async function add(req: Request, res: Response) {
    const input = req.body.sanitizedInput;
    const categoria = await repositorio.add(input);
    res.status(201).send({ message: 'Categoría creada', categoria });
}

export async function update(req: Request, res: Response) {
    const input = req.body.sanitizedInput;
    const categoria = await repositorio.update(input);
    if (!categoria) {
        res.status(404).send({ message: 'Categoría no encontrada' });
        return;
    }
    res.send({ message: 'Categoría actualizada', categoria });
}

export async function deleteCategoria(req: Request, res: Response) {
    const categoria = await repositorio.delete({ id: req.params.id });
    if (!categoria) {
        res.status(404).send({ message: 'Categoría no encontrada' });
        return;
    }
    res.send({ message: 'Categoría eliminada', categoria });
}
