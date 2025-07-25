import { Router } from "express"
import { sanitizeUsuarioInput, findAll,findOne, add,update,deleteUsuario} from "./usuarios.controlador.js"

export const usuariorouter = Router()

usuariorouter.get("/", findAll)
usuariorouter.get("/:name", findOne)
usuariorouter.post("/", sanitizeUsuarioInput, add)
usuariorouter.put("/:name", sanitizeUsuarioInput, update)
usuariorouter.patch("/:name", sanitizeUsuarioInput, update)
usuariorouter.delete("/:name", deleteUsuario)

export default usuariorouter