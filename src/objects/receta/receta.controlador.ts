import { Request, Response, NextFunction } from "express"
import { recetaRepositorio } from "./receta.repositorio"

const repositorio = new recetaRepositorio()

function sanitizeRecetaInput(req: Request, res: Response, next: NextFunction) {
  req.body.sanitizedInput = {
    id: req.body.id,
    nombre: req.body.nombre,
    Descripcion: req.body.Descripcion,
    idAutor: req.body.idAutor,
    idAlimentosReceta: req.body.idAlimentosReceta
  }
  next()
}

// CRUD functions
async function findAll(req: Request, res: Response) {
  const recetas = await repositorio.findAll();
  res.json({ recetas });
}

async function findOne(req: Request, res: Response) {
  const receta = await repositorio.findOne({ id: req.params.id });
  if (!receta) {
    res.status(404).send({ message: 'Receta no encontrada' });
    return;
  }
  res.json(receta);
}

async function add(req: Request, res: Response) {
  const input = req.body.sanitizedInput;
  const receta = await repositorio.add(input);
  res.status(201).send({ message: 'Receta creada', receta });
}

async function update(req: Request, res: Response) {
  req.body.sanitizedInput.id = req.params.id;
  const receta = await repositorio.update(req.body.sanitizedInput.id,req.body.sanitizedInput);
  if (!receta) {
    res.status(404).send({ message: 'Receta no encontrada' });
    return;
  }
  res.status(200).send({ message: 'Receta actualizada correctamente', data: receta });
}

async function deleteReceta(req: Request, res: Response) {
  const id = req.params.id;
  const receta = await repositorio.delete({ id });
  if (!receta) {
    res.status(404).send({ message: 'Receta no encontrada' });
    return;
  }
  res.status(200).send({ message: 'Receta borrada exitosamente' });
}

export { sanitizeRecetaInput, findAll, findOne, add, update, deleteReceta }
