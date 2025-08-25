import { Router } from "express"
import { sanitizeAlimentoInput, findAll,findOne, add,update, remove} from "./alimento.controlador.js"

export const alimentoRouter = Router()


alimentoRouter.get('/', findAll);
alimentoRouter.get('/:id', findOne);
alimentoRouter.post('/', sanitizeAlimentoInput, add);
alimentoRouter.put('/:id', sanitizeAlimentoInput, update);
alimentoRouter.patch('/:id', sanitizeAlimentoInput, update);
alimentoRouter.delete('/:id', remove);

 export default alimentoRouter
