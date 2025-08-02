import { Router } from "express"
import { sanitizeNutrienteInput, findAll, findOne, add, update, deleteNutriente } from "./nutriente.controlador.js"

export const nutrienterouter = Router()

nutrienterouter.get("/", findAll)
nutrienterouter.get("/:id", findOne)
nutrienterouter.post("/", sanitizeNutrienteInput, add)
nutrienterouter.put("/:id", sanitizeNutrienteInput, update)
nutrienterouter.patch("/:id", sanitizeNutrienteInput, update)
nutrienterouter.delete("/:id", deleteNutriente)

export default nutrienterouter
