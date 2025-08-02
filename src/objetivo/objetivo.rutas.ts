import { Router } from "express"
import { sanitizeObjetivoInput, findAll,findOne, add,update,deleteObjetivo} from "./objetivo.controlador.js"

export const objetivorouter = Router()

objetivorouter.get("/", findAll)
objetivorouter.get("/:id", findOne)
objetivorouter.post("/", sanitizeObjetivoInput, add)
objetivorouter.put("/:id", sanitizeObjetivoInput, update)
objetivorouter.patch("/:id", sanitizeObjetivoInput, update)
objetivorouter.delete("/:id", deleteObjetivo)

export default objetivorouter
