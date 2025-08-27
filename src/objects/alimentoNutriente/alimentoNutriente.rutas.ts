import { Router } from "express"
import { sanitizeAlimentoNutrienteInput, findAll, findOne, add, update, remove} from "./alimentoNutriente.controlador.js"

export const alimentoNutrienterouter = Router()

alimentoNutrienterouter.get("/", findAll)
alimentoNutrienterouter.get('/:alimentoID/:nutrienteID',findOne);
alimentoNutrienterouter.post('/:alimentoID/:nutrienteID', sanitizeAlimentoNutrienteInput, add)
alimentoNutrienterouter.put('/:alimentoID/:nutrienteID', sanitizeAlimentoNutrienteInput, update)
alimentoNutrienterouter.patch('/:alimentoID/:nutrienteID', sanitizeAlimentoNutrienteInput, update)
alimentoNutrienterouter.delete('/:alimentoID/:nutrienteID', remove);

export default alimentoNutrienterouter
