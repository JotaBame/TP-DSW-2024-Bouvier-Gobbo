import { Router } from "express"
import { sanitizeAlimentoNutrienteInput, findAll, findOne, add, update, deleteAlimentoNutriente } from "./alimentoNutriente.controlador.js"

export const alimentoNutrienterouter = Router()

alimentoNutrienterouter.get("/", findAll)
alimentoNutrienterouter.get("/:id", findOne)
alimentoNutrienterouter.post("/", sanitizeAlimentoNutrienteInput, add)
alimentoNutrienterouter.put("/:id", sanitizeAlimentoNutrienteInput, update)
alimentoNutrienterouter.patch("/:id", sanitizeAlimentoNutrienteInput, update)
alimentoNutrienterouter.delete("/:id", deleteAlimentoNutriente)

export default alimentoNutrienterouter
