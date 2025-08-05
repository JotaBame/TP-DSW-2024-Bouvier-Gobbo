import { Request, Response ,NextFunction } from "express"
import { objetivoRepositorio } from "./objetivo.repositorio.js"


const repositorio = new objetivoRepositorio()

function sanitizeObjetivoInput(req: Request, res:Response, next:NextFunction){
  req.body.sanitizedInput = {
    idObjetivo: req.body.idObjetivo,
    idUsuario: req.body.idUsuario,
    pesoDeseado: req.body.pesoDeseado,
    fechaInicio: req.body.fechaInicio ? new Date(req.body.fechaInicio) : undefined,
    fechaFin: req.body.fechaFin ? new Date(req.body.fechaFin) : undefined,
    recetasObjetivo: Array.isArray(req.body.recetasObjetivo) ? req.body.recetasObjetivo : []
  }
  next()
}

async function findAll(req: Request, res: Response) {
    const objetivos = await repositorio.findAll();
    res.json({ objetivos });
}

async function findOne(req: Request, res: Response) {
  const objetivo = await repositorio.findOne({ id:req.params.id });
  if (!objetivo) {
    res.status(404).send({ message: 'Objetivo no encontrado' });
    return;
  }

  res.json(objetivo);
}

async function add(req: Request, res: Response) {
    const input = req.body.sanitizedInput;
    const objetivo = await repositorio.add(input);
    res.status(201).send({ message: 'Objetivo creado', objetivo });
}

async function update(req: Request, res: Response) {
  const input = req.body.sanitizedInput;
  input.idObjetivo = Number.parseInt(req.params.id);
  const objetivo = await repositorio.update(input);

  if (!objetivo) {
    res.status(404).send({ message: 'Objetivo no encontrado' });
    return;
  }

  res.status(200).send({ message: 'Objetivo actualizado correctamente', data: objetivo });
}

async function deleteObjetivo(req: Request, res: Response) {
  const objetivo = await repositorio.delete({ id: req.params.id });

  if (!objetivo) {
    res.status(404).send({ message: 'Objetivo no encontrado' });
    return;
  }

  res.status(200).send({ message: 'Objetivo eliminado correctamente' });
}

export { sanitizeObjetivoInput, findAll, findOne, add, update, deleteObjetivo };
 