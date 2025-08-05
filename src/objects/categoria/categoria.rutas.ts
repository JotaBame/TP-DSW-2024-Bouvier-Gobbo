
import { Router } from "express";
import { sanitizeCategoriaInput, findAll, findOne, add, update, deleteCategoria } from "./categoria.controlador.js";

export const categoriarouter = Router();

categoriarouter.get("/", findAll);
categoriarouter.get("/:id", findOne);
categoriarouter.post("/", sanitizeCategoriaInput, add);
categoriarouter.put("/:id", sanitizeCategoriaInput, update);
categoriarouter.patch("/:id", sanitizeCategoriaInput, update);
categoriarouter.delete("/:id", deleteCategoria);

export default categoriarouter;
