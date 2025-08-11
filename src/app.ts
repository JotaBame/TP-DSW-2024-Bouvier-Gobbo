import express, { Request, Response, NextFunction } from 'express'
 import usuariorouter from './objects/usuarios/usuarios.rutas.js'
import alimentorouter from './objects/alimentos/alimento.rutas.js'
import 'reflect-metadata'
import { orm, syncSchema } from './shared/orm.js'
import { RequestContext } from '@mikro-orm/core'

const app = express()
app.use(express.json()) 

//luego de los middlewares base como express

app.use((req, res, next) => {
  RequestContext.create(orm.em, next)
})

// antes de las rutas y middlewares de negocio
app.use('/api/usuarios', usuariorouter)
 app.use('/api/alimentos', alimentorouter)


await syncSchema() // never in production

app.listen(3000,() => {
    console.log("funka")
})

