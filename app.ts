import express, { Request, Response, NextFunction } from 'express'
import { usuario } from "./Ts/usuarios.js"
import { Alimento } from "./Ts/alimentos.js"

const app = express()
//middleWare para trabajar los datos que nos ingresan con el titulo "application/json" 
app.use(express.json()) 


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
  next()
}

function sanitizeUsuarioInput(req: Request, res:Response, next:NextFunction){
  req.body.sanitizedInput = {
    // TO DO: No deberia dejar agregar un alimento igual a otro. Hay que validar que tanto nombre y marca sean distintos.
    // TO DO: Evitar que puedan ingresarse tipos de datos no validos.
    name:req.body.name,
    type:req.body.type,
    mail:req.body.mail,
    peso:req.body.peso,
    altura:req.body.altura
  }
  Object.keys(req.body.sanitizedInput).forEach((key) => {
    if (req.body.sanitizedInput[key] === undefined) {
      delete req.body.sanitizedInput[key]
    }
  })
  next()
}

const usuarios = [
    new usuario(
        'pepe',
        'free',
        'pepepiola@gmail.com',
        76,
        175,
    ),
    new usuario(
         'juan',
        'vip',
        'juanpiola@gmail.com',
        83,
        172,
    ),
]

app.get('/api/usuarios',(req, res) => {
    res.json(usuarios);
})

app.get('/api/usuarios/:name',sanitizeUsuarioInput, (req, res) => {
  const usuario = usuarios.find((usuario) => usuario.name === req.params.name)
    if(!usuario){
        res.status(404).send({message: 'usuario no encontrado'})
    }
    res.json(usuario)
})

app.post('/api/usuarios',sanitizeUsuarioInput,(req,res) => {
    //body sería la info del nuevo usuario que nos ingresan
    const { name, type, mail, peso, altura}  = req.body
    const new_usuario = new usuario(name, type, mail, peso, altura)

    usuarios.push(new_usuario)
    // el status 201 indica que se creó un nuevo recurso
    res.status(201).send({message: 'usuario creado' , data: new_usuario})
})

app.put('/api/usuarios/:name', sanitizeUsuarioInput, (req, res) => {
 
  const usuarioname = usuarios.findIndex((usuario) => usuario.name === req.params.name) 
  if (usuarioname === -1) //no lo encontró
    {
      res.status(404).send({message:'Usuario no encontrado'})
    } 
  const input = {
    name:req.body.name,
    type:req.body.type,
    mail:req.body.mail,
    peso:req.body.peso,
    altura:req.body.altura
  }
  usuarios[usuarioname] = { ...usuarios[usuarioname], ...input}
  res.status(200).send({message:'Usuario actualizado correctamente', data:alimentos[usuarioname]})
  
})

app.patch('/api/usuarios/:name', sanitizeUsuarioInput, (req, res) => {
 
  const usuario_peso = usuarios.findIndex((usuario) => usuario.name === req.params.name) 
  if (usuario_peso === -1)
    {
      res.status(404).send({message:'Usuario no encontrado'})
      return
    } 
  const input= {
    peso: req.body.peso
  }
  usuarios[usuario_peso] = { ...usuarios[usuario_peso], ...input}
  res.status(200).send({message:'Atributo actualizado correctamente', data:alimentos[usuario_peso]})
  
})

app.delete('/api/usuarios/:name', (req, res) => {
  const usuario_ = usuarios.findIndex((usuario) => usuario.name === req.params.name) 
  if (usuario_ === -1)
    {
      res.status(404).send({message:'Usuario no encontrado'})
      return
    }  
  usuarios.splice(usuario_, 1)
  res.status(200).send({message: 'usuarioo borrado exitosamente'})
})















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