import { Router } from "express";
import { sanitizeRecetaInput, findAll, findOne, add, update, deleteReceta } from "./receta.controlador";

const router = Router();

router.get("/", findAll);
router.get("/:id", findOne);
router.post("/", sanitizeRecetaInput, add);
router.put("/:id", sanitizeRecetaInput, update);
router.delete("/:id", deleteReceta);

export default router;
