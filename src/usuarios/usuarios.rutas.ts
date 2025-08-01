import { Router } from "express"
import { sanitizeUsuarioInput, findAll,findOne, add,update,deleteUsuario} from "./usuarios.controlador.js"

export const usuariorouter = Router()

usuariorouter.get("/", findAll)
usuariorouter.get("/:id", findOne)
usuariorouter.post("/", sanitizeUsuarioInput, add)
usuariorouter.put("/:id", sanitizeUsuarioInput, update)
usuariorouter.patch("/:id", sanitizeUsuarioInput, update)
usuariorouter.delete("/:id", deleteUsuario)

export default usuariorouter