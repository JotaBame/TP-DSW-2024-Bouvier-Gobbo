import { Router } from "express"
import { sanitizeAlimentoRecetaInput, findAll, findOne, add, update, deleteAlimentoReceta } from "./alimentoReceta.controlador"

export const alimentoRecetarouter = Router()

alimentoRecetarouter.get("/", findAll)
alimentoRecetarouter.get("/:id", findOne)
alimentoRecetarouter.post("/", sanitizeAlimentoRecetaInput, add)
alimentoRecetarouter.put("/:id", sanitizeAlimentoRecetaInput, update)
alimentoRecetarouter.patch("/:id", sanitizeAlimentoRecetaInput, update)
alimentoRecetarouter.delete("/:id", deleteAlimentoReceta)

export default alimentoRecetarouter
