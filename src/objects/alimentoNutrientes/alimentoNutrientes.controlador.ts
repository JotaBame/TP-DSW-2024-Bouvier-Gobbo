import { Request, Response, NextFunction } from "express"
import { alimentoNutrienteRepositorio } from "./alimentoNutrientes.repositorio"

const repositorio = new alimentoNutrienteRepositorio()

function sanitizeAlimentoNutrienteInput(req: Request, res: Response, next: NextFunction) {
  req.body.sanitizedInput = {
    id: req.body.id,
    idAlimento: req.body.idAlimento,
    idNutriente: req.body.idNutriente,
    cantidad: req.body.cantidad
  }
  next()
}

// CRUD functions
async function findAll(req: Request, res: Response) {
  const alimentoNutrientes = await repositorio.findAll();
  res.json({ alimentoNutrientes });
}

async function findOne(req: Request, res: Response) {
  const alimentoNutriente = await repositorio.findOne({ id: req.params.id });
  if (!alimentoNutriente) {
    res.status(404).send({ message: 'AlimentoNutriente no encontrado' });
    return;
  }
  res.json(alimentoNutriente);
}

async function add(req: Request, res: Response) {
  const input = req.body.sanitizedInput;
  const alimentoNutriente = await repositorio.add(input);
  res.status(201).send({ message: 'AlimentoNutriente creado', alimentoNutriente });
}

async function update(req: Request, res: Response) {
  req.body.sanitizedInput.id = req.params.id;
  const alimentoNutriente = await repositorio.update(req.body.sanitizedInput.id, req.body.sanitizedInput);
  if (!alimentoNutriente) {
    res.status(404).send({ message: 'AlimentoNutriente no encontrado' });
    return;
  }
  res.status(200).send({ message: 'AlimentoNutriente actualizado correctamente', data: alimentoNutriente });
}

async function deleteAlimentoNutriente(req: Request, res: Response) {
  const id = req.params.id;
  const alimentoNutriente = await repositorio.delete({ id });
  if (!alimentoNutriente) {
    res.status(404).send({ message: 'AlimentoNutriente no encontrado' });
    return;
  }
  res.status(200).send({ message: 'AlimentoNutriente borrado exitosamente' });
}

export { sanitizeAlimentoNutrienteInput, findAll, findOne, add, update, deleteAlimentoNutriente }
