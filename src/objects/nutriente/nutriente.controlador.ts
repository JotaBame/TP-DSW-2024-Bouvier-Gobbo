import { Request, Response, NextFunction } from "express"
import { nutrienteRepositorio } from "./nutriente.repositorio.js"

const repositorio = new nutrienteRepositorio()

function sanitizeNutrienteInput(req: Request, res: Response, next: NextFunction) {
  req.body.sanitizedInput = {
    id: req.body.id,
    nombre: req.body.nombre,
    unidadMedida: req.body.unidadMedida
  }
  next()
}

// CRUD functions
async function findAll(req: Request, res: Response) {
  const nutrientes = await repositorio.findAll();
  res.json({ nutrientes });
}

async function findOne(req: Request, res: Response) {
  const nutriente = await repositorio.findOne({ id: req.params.id });
  if (!nutriente) {
    res.status(404).send({ message: 'Nutriente no encontrado' });
    return;
  }
  res.json(nutriente);
}

async function add(req: Request, res: Response) {
  const input = req.body.sanitizedInput;
  const nutriente = await repositorio.add(input);
  res.status(201).send({ message: 'Nutriente creado', nutriente });
}

async function update(req: Request, res: Response) {
  req.body.sanitizedInput.id = req.params.id;
  const nutriente = await repositorio.update(req.body.sanitizedInput);
  if (!nutriente) {
    res.status(404).send({ message: 'Nutriente no encontrado' });
    return;
  }
  res.status(200).send({ message: 'Nutriente actualizado correctamente', data: nutriente });
}

async function deleteNutriente(req: Request, res: Response) {
  const id = req.params.id;
  const nutriente = await repositorio.delete({ id });
  if (!nutriente) {
    res.status(404).send({ message: 'Nutriente no encontrado' });
    return;
  }
  res.status(200).send({ message: 'Nutriente borrado exitosamente' });
}

export { sanitizeNutrienteInput, findAll, findOne, add, update, deleteNutriente }
