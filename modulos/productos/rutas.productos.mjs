import { Router } from "express";
import { getProductos } from "./controlador.productos.mjs";
import { getProductoPorId } from "./controlador.productos.mjs";
import { postProducto } from "./controlador.productos.mjs";
import { putProducto } from "./controlador.productos.mjs";
import { deleteProducto } from "./controlador.productos.mjs";



const router = Router();

router.get("/", getProductos);
router.get("/:id", getProductoPorId);
router.post("/", postProducto);
router.put("/:id", putProducto);
router.delete("/:id", deleteProducto);



export default router;