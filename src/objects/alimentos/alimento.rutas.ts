import { Router } from "express"
import { sanitizeAlimentoInput, findAll,findOne, add,update, deleteAlimento} from "./alimento.controlador.js"

export const alimentorouter = Router()


alimentorouter.get("/", findAll)
alimentorouter.get("/:id", findOne)
alimentorouter.post("/", sanitizeAlimentoInput, add)
alimentorouter.put("/:id", sanitizeAlimentoInput, update)
alimentorouter.patch("/:id", sanitizeAlimentoInput, update)
alimentorouter.delete("/:id", deleteAlimento)

 export default alimentorouter
