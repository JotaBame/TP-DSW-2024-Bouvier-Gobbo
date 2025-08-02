import express, { Request, Response, NextFunction } from 'express'
 import usuariorouter from './objects/usuarios/usuarios.rutas.js'
import objetivorouter from './objects/objetivo/objetivo.rutas.js'
import alimentorouter from './objects/alimentos/alimento.rutas.js'

const app = express()
app.use(express.json()) 
app.use('/api/usuarios', usuariorouter)
app.use('/api/objetivos', objetivorouter)
app.use('/api/alimentos', alimentorouter)

app.listen(3000,() => {
    console.log("funka")
})