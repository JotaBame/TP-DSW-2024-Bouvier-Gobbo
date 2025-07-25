import { Request, Response ,NextFunction } from "express"
import { usuarioRepositorio } from "./usuarios.repositorio.js"

const repositorio = new usuarioRepositorio()

function sanitizeUsuarioInput(req: Request, res:Response, next:NextFunction){
  req.body.sanitizedInput = {

    name:req.body.name,
    type:req.body.type,
    mail:req.body.mail,
    peso:req.body.peso,
    altura:req.body.altura
  }
 
  next()
}

function findAll(req: Request, res: Response) {
    res.json({ usuarios: repositorio.findAll() });
}

function findOne(req: Request, res: Response) {
  const usuario = repositorio.findOne({ id: req.params.name });
  if (!usuario) {
    res.status(404).send({ message: 'usuario no encontrado' });
    return;
  }

  res.json(usuario);
}

function add(req: Request, res: Response) {
    const input = req.body.sanitizedInput;
    repositorio.add(input);
    res.status(201).send({ message: 'usuario creado', usuario: input });
}

function update(req: Request, res: Response) {
  req.body.sanitizedInput.name = req.params.name;
  const usuario = repositorio.update(req.body.sanitizedInput);

  if (!usuario) //no lo encontró
    {
      res.status(404).send({message:'Usuario no encontrado'})
      return 
    }

  res.status(200).send({message:'Usuario actualizado correctamente', data:usuario})
  return 
}

function patch(req: Request, res: Response) {
  req.body.sanitizedInput.name = req.params.name
  const usuario = repositorio.update(req.body.sanitizedInput)

  if (!usuario) //no lo encontró
    {
      res.status(404).send({message:'Usuario no encontrado'})
      return 
    }

  res.status(200).send({message:'Usuario actualizado correctamente', data:usuario})
  return 
}

function deleteUsuario(req: Request, res: Response) {
  const id = req.params.name;
  const usuario = repositorio.delete({ id });

  if (!usuario)
    {
      res.status(200).send({message: 'usuario borrado exitosamente'})
      return 
    } 
  res.status(404).send({message:'Usuario no encontrado'})
  return
}

export{ sanitizeUsuarioInput, findAll, findOne ,add, update, patch, deleteUsuario}