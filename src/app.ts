import express, { Request, Response, NextFunction } from 'express'
import { Alimento } from "./alimentos/alimento.js"
import usuariorouter from './usuarios/usuarios.rutas.js'

const app = express()
app.use(express.json()) 
app.use('/api/usuarios', usuariorouter)


//validación entrada de datos de alimentos

function sanitizeAlimentoInput(req: Request, res:Response, next:NextFunction){
  req.body.sanitizedInput = {
    // TO DO: No deberia dejar agregar un alimento igual a otro. Hay que validar que tanto nombre y marca sean distintos.
    // TO DO: Evitar que puedan ingresarse tipos de datos no validos.
    nombre: req.body.nombre,
    marca: req.body.marca,
    presentacion: req.body.presentacion,
    unidadMedida: req.body.unidadMedida
  }
  Object.keys(req.body.sanitizedInput).forEach((key) => {
    if (req.body.sanitizedInput[key] === undefined) {
      delete req.body.sanitizedInput[key]
    }
  })
  next() //permite que siga hacia la ruta que genera la res
}






//Comienza el CRUD alimentos
const alimentos = [ new Alimento(
    "Arandanos",
    "Arcor",
   
    null,
    "gramos"),
    new Alimento(
      "Pollo",
      "Pollo27",
     
      null,
      "kilogramos")
]


app.get('/api/alimentos', (req, res) => {
  res.json(alimentos)
})

app.get('/api/alimentos/:nombre', (req, res) => {
  const alimento = alimentos.find((alimento) => alimento.nombre === req.params.nombre)
  // NO USES NOMBRES, VAMOS A USAR IDs CUANDO TENGAMOS LA BASE DE DATOS

  if (!alimento)
    {
      res.status(404).send({message:'Alimento no encontrado'})
    } 
  res.json({ data: alimento })
})

app.post('/api/alimentos', sanitizeAlimentoInput,  (req, res) => {
  const input = req.body.sanitizedInput

  const alimento = new Alimento(input.nombre, input.marca, input.presentacion, input.unidadMedida)
  alimentos.push(alimento)
  res.status(201).send({ message: 'Alimento creado', data: alimento })
})

app.put('/api/alimentos/:nombre', sanitizeAlimentoInput, (req, res) => {
 
  const alimentoNombre = alimentos.findIndex((alimento) => alimento.nombre === req.params.nombre) 
  if (alimentoNombre === -1)
    {
      res.status(404).send({message:'Alimento no encontrado'})
      return
    } 
 
    alimentos[alimentoNombre] = { ...alimentos[alimentoNombre], ...req.body.sanitizedInput}
    res.status(200).send({message:'Alimento actualizado correctamente', data:alimentos[alimentoNombre]})
  
})

app.patch('/api/alimentos/:nombre', sanitizeAlimentoInput, (req, res) => {
 
  const alimentoNombre = alimentos.findIndex((alimento) => alimento.nombre === req.params.nombre) 
  if (alimentoNombre === -1)
    {
      res.status(404).send({message:'Alimento no encontrado'})
      return
    } 
 
    alimentos[alimentoNombre] = { ...alimentos[alimentoNombre], ...req.body.sanitizedInput}
    res.status(200).send({message:'Alimento actualizado correctamente', data:alimentos[alimentoNombre]})
  
})

app.delete('/api/alimentos/:nombre', (req, res) => {
  const alimentoNombre = alimentos.findIndex((alimento) => alimento.nombre === req.params.nombre) 
  if (alimentoNombre === -1)
    {
      res.status(404).send({message:'Alimento no encontrado'})
      return
    } 
  alimentos.splice(alimentoNombre, 1)
  res.status(200).send({message: 'Alimento borrado exitosamente'})
})

app.listen(3000,() => {
    console.log("funka")
})