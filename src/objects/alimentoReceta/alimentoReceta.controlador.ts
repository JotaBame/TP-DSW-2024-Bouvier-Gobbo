import { Request, Response, NextFunction } from "express"
import { alimentoRecetaRepositorio } from "./alimentoReceta.repositorio"

const repositorio = new alimentoRecetaRepositorio()

function sanitizeAlimentoRecetaInput(req: Request, res: Response, next: NextFunction) {
  req.body.sanitizedInput = {
    id: req.body.id,
    idAlimento: req.body.idAlimento,
    idRecetaAsociada: req.body.idRecetaAsociada,
    cantidadPorUnidad: req.body.cantidadPorUnidad
  }
  next()
}

// CRUD functions
async function findAll(req: Request, res: Response) {
  const alimentoRecetas = await repositorio.findAll();
  res.json({ alimentoRecetas });
}

async function findOne(req: Request, res: Response) {
  const alimentoReceta = await repositorio.findOne({ id: req.params.id });
  if (!alimentoReceta) {
    res.status(404).send({ message: 'AlimentoReceta no encontrado' });
    return;
  }
  res.json(alimentoReceta);
}

async function add(req: Request, res: Response) {
  const input = req.body.sanitizedInput;
  const alimentoReceta = await repositorio.add(input);
  res.status(201).send({ message: 'AlimentoReceta creado', alimentoReceta });
}

async function update(req: Request, res: Response) {
  req.body.sanitizedInput.id = req.params.id;
  const alimentoReceta = await repositorio.update(req.body.sanitizedInput.id, req.body.sanitizedInput);
  if (!alimentoReceta) {
    res.status(404).send({ message: 'AlimentoReceta no encontrado' });
    return;
  }
  res.status(200).send({ message: 'AlimentoReceta actualizado correctamente', data: alimentoReceta });
}

async function deleteAlimentoReceta(req: Request, res: Response) {
  const id = req.params.id;
  const alimentoReceta = await repositorio.delete({ id });
  if (!alimentoReceta) {
    res.status(404).send({ message: 'AlimentoReceta no encontrado' });
    return;
  }
  res.status(200).send({ message: 'AlimentoReceta borrado exitosamente' });
}

export { sanitizeAlimentoRecetaInput, findAll, findOne, add, update, deleteAlimentoReceta }
