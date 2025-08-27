import { Request, Response, NextFunction } from "express"
import { orm } from '../../shared/orm.js';
import { Nutriente } from "./nutriente.entidad.js";

const em = orm.em;

function sanitizeNutrienteInput(
  req: Request,
  res: Response,
  next: NextFunction
) {
  req.body.sanitizedInput = {
    nombre: req.body.nombre,
    unidadMedida: req.body.unidadMedida,
  };
  //more checks here

  Object.keys(req.body.sanitizedInput).forEach((key) => {
    if (req.body.sanitizedInput[key] === undefined) {
      delete req.body.sanitizedInput[key];
    }
  });
  next();
}

async function findAll(req: Request, res: Response) {
  try {
    const nutrientes = await em.find(
      Nutriente,
      {}
    );
    res
      .status(200)
      .json({ message: 'encontrado todos los nutrientes', data: nutrientes });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function findOne(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id);
    const nutriente = await em.findOneOrFail(
      Nutriente,
      { id },
     );
    res.status(200).json({ message: 'encontrado nutriente', data: nutriente });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function add(req: Request, res: Response) {
  try {
    const nutriente = em.create(Nutriente, req.body.sanitizedInput);
    await em.flush();
    res.status(201).json({ message: 'Nutriente Creado', data: nutriente });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function update(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id);
    const nutrienteToUpdate = await em.findOneOrFail(Nutriente, { id });
    em.assign(nutrienteToUpdate, req.body.sanitizedInput);
    await em.flush();
    res
      .status(200)
      .json({ message: 'nutriente updated', data: nutrienteToUpdate });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function remove(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id);
    const nutriente = em.getReference(Nutriente, id);
    await em.removeAndFlush(nutriente);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export { sanitizeNutrienteInput, findAll, findOne, add, update, remove };
