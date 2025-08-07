import { Request, Response ,NextFunction } from "express"
import { usuarioRepositorio } from "./usuarios.repositorio.js"


const repositorio = new usuarioRepositorio()

function sanitizeUsuarioInput(req: Request, res:Response, next:NextFunction){
  req.body.sanitizedInput = {

    nombre:req.body.nombre,
    tipo:req.body.tipo,
    email:req.body.email,
    peso:req.body.peso,
    altura:req.body.altura,
    id: req.body.id
  }
 
  next()
}

 async function findAll(req: Request, res: Response) {
    const usuarios = await repositorio.findAll();
    res.json({ usuarios });
}

async function findOne(req: Request, res: Response) {
  const usuario = await repositorio.findOne({ id:req.params.id });
  if (!usuario) {
    res.status(404).send({ message: 'usuario no encontrado' });
    return;
  }

  res.json(usuario);
}

async function add(req: Request, res: Response) {
    const input = req.body.sanitizedInput;
    const usuario = await repositorio.add(input);
    res.status(201).send({ message: 'usuario creado', usuario });
}

async function update(req: Request, res: Response) {
  req.body.sanitizedInput.id = req.params.id;
  const usuario = await repositorio.update(req.body.sanitizeUsuarioInput.id, req.body.sanitizedInput);

  if (!usuario) //no lo encontró
    {
      res.status(404).send({message:'Usuario no encontrado'})
      return 
    }

  res.status(200).send({message:'Usuario actualizado correctamente', data:usuario})
  return 
}

async function patch(req: Request, res: Response) {
  req.body.sanitizedInput.id = req.params.id
  const usuario = await repositorio.update(req.params.id , req.body.sanitizedInput)

  if (!usuario) //no lo encontró
    {
      res.status(404).send({message:'Usuario no encontrado'})
      return 
    }

  res.status(200).send({message:'Usuario actualizado correctamente', data:usuario})
  return 
}

async function deleteUsuario(req: Request, res: Response) {
  const id = req.params.id;
  const usuario = await repositorio.delete({ id });

  if (!usuario)
    {
      res.status(404).send({message:'Usuario no encontrado'})
      return 
    } 
  res.status(200).send({message: 'usuario borrado exitosamente'})
  return
}

export{ sanitizeUsuarioInput, findAll, findOne ,add, update, patch, deleteUsuario}