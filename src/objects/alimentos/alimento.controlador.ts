import { Request, Response, NextFunction } from 'express';
import { Alimento } from './alimento.entidad.js';
import { orm } from '../../shared/orm.js';
 
const em = orm.em;

function sanitizeAlimentoInput(
  req: Request,
  res: Response,
  next: NextFunction
) {
  req.body.sanitizedInput = {
      id: req.body.id,
      nombre: req.body.nombre,
       marca : req.body.marca,
       presentacion: req.body.presentacion,
     unidadMedida: req.body.unidadMedida,
     alimentoNutrientes: req.body.alimentoNutrientes
 
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
    const alimentos = await em.find(
      Alimento,
      {},
      { populate: ['alimentoNutrientes'] }
    );
    res.status(200).json({ message: 'encontrado todos los alimentos', data: alimentos });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function findOne(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id);
    const alimento = await em.findOneOrFail(
      Alimento,
      { id },
      { populate: ['alimentoNutrientes'] }
    );
    res.status(200).json({ message: 'encontrado alimento', data: alimento });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function add(req: Request, res: Response) {
  try {
    const alimento = em.create(Alimento, req.body.sanitizedInput);
    await em.flush();
    res.status(201).json({ message: 'Alimento Creado', data: alimento });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function update(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id);
    const alimentoToUpdate = await em.findOneOrFail(Alimento, { id });
    em.assign(alimentoToUpdate, req.body.sanitizedInput);
    await em.flush();
    res
      .status(200)
      .json({ message: 'alimento updated', data: alimentoToUpdate });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function remove(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id);
    const alimento = em.getReference(Alimento, id);
    await em.removeAndFlush(alimento);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export { sanitizeAlimentoInput, findAll, findOne, add, update, remove };
