import { Request, Response, NextFunction } from "express"
import { alimentoRepositorio } from "./alimento.repositorio.js"

const repositorio = new alimentoRepositorio()

function sanitizeAlimentoInput(req: Request, res: Response, next: NextFunction) {
  req.body.sanitizedInput = {
    id: req.body.id,
    nombre: req.body.nombre,
    marca: req.body.marca,
    presentacion: req.body.presentacion,
    unidadMedida: req.body.unidadMedida,
    idNutriente: req.body.idNutriente
  }
  next()
}

// CRUD functions
async function findAll(req: Request, res: Response) {
  const alimentos = await repositorio.findAll();
  res.json({ alimentos });
}

async function findOne(req: Request, res: Response) {
  const alimento = await repositorio.findOne({ id: req.params.id });
  if (!alimento) {
    res.status(404).send({ message: 'Alimento no encontrado' });
    return;
  }
  res.json(alimento);
}

async function add(req: Request, res: Response) {
  const input = req.body.sanitizedInput;
  const alimento = await repositorio.add(input);
  res.status(201).send({ message: 'Alimento creado', alimento });
}

async function update(req: Request, res: Response) {
  req.body.sanitizedInput.id = req.params.id;
  const alimento = await repositorio.update(req.body.sanitizedInput);
  if (!alimento) {
    res.status(404).send({ message: 'Alimento no encontrado' });
    return;
  }
  res.status(200).send({ message: 'Alimento actualizado correctamente', data: alimento });
}

async function deleteAlimento(req: Request, res: Response) {
  const id = req.params.id;
  const alimento = await repositorio.delete({ id });
  if (!alimento) {
    res.status(404).send({ message: 'Alimento no encontrado' });
    return;
  }
  res.status(200).send({ message: 'Alimento borrado exitosamente' });
}

export { sanitizeAlimentoInput, findAll, findOne, add, update, deleteAlimento }
