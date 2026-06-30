import { Router } from "express";

import { getProductos } from "./controlador.productos.mjs";
import { getProductoPorId } from "./controlador.productos.mjs";
import { postProducto } from "./controlador.productos.mjs";
import { putProducto } from "./controlador.productos.mjs";
import { deleteProducto } from "./controlador.productos.mjs";

import { verificarToken } from "../usuarios/middleware.autenticacion.mjs";


const router = Router();


router.get("/", getProductos);

router.get("/:id", getProductoPorId);


router.post("/", verificarToken, postProducto);

router.put("/:id", verificarToken, putProducto);

router.delete("/:id", verificarToken, deleteProducto);



export default router;