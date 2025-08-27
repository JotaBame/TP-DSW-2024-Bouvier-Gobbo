import { Request, Response, NextFunction } from 'express';
import { alimentoNutriente } from './alimentoNutriente.entidad.js';
import { orm } from '../../shared/orm.js';
 

const em = orm.em;

function sanitizeAlimentoNutrienteInput(
  req: Request,
  res: Response,
  next: NextFunction
) { console.log(req.body),
  (req.body.sanitizedInput = {
    alimentoID: req.body.alimentoID,
    nutrienteID: req.body.nutrienteID,
    cantidadNutriente: req.body.cantidadNutriente,
  });
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
    const alimentosNutrientes = await em.find(
      alimentoNutriente,
      {},
     );
    res
      .status(200)
      .json({ message: 'encontrado todos los nutrientes para el alimento', data: alimentosNutrientes });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function findOne(req: Request, res: Response) {
  try {
    const alimentoID = Number.parseInt(req.params.alimentoID);
    const nutrienteID = Number.parseInt(req.params.nutrienteID);
 
    const alimentonutriente = await em.findOneOrFail(
      alimentoNutriente,
      {
        alimento: alimentoID,
        nutriente: nutrienteID,
      },
    );
    res.status(200).json({ message: 'encontrado nutrientes del alimento', data: alimentonutriente });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function add(req: Request, res: Response) {
 try {
   const alimentoID = Number(req.params.alimentoID);
   const nutrienteID = Number(req.params.nutrienteID);

   const alimentonutriente = em.create(alimentoNutriente, {
     alimento: alimentoID,
     nutriente: nutrienteID,
     cantidadNutriente: req.body.cantidadNutriente,
   });

   await em.persistAndFlush(alimentonutriente);

   res.status(201).json({
     message: 'Alimento Nutriente creado',
     data: alimentoNutriente,
   });
 } catch (error: any) {
   res.status(500).json({ message: error.message });
 }
}

async function update(req: Request, res: Response) {
  console.log('hi');
  try {
    
const alimento = Number.parseInt(req.params.alimentoID);
const nutriente = Number.parseInt(req.params.nutrienteID);

const alimentonutriente = await em.findOneOrFail(alimentoNutriente, {
  alimento: alimento,
  nutriente: nutriente,
});
   em.assign(alimentonutriente, req.body.sanitizedInput);
  await em.flush();
        res
          .status(200)
          .json({ message: 'alimento nutriente updated', data: alimentonutriente });
   } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function remove(req: Request, res: Response) {
  try {
   const alimentoID = Number.parseInt(req.params.alimentoID);
   const nutrienteID = Number.parseInt(req.params.nutrienteID);

   const alimentonutriente = await em.findOneOrFail(alimentoNutriente, {
     alimento: alimentoID,
     nutriente: nutrienteID,
   });
    await em.removeAndFlush(alimentonutriente);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export { sanitizeAlimentoNutrienteInput, findAll, findOne, add, update, remove };
