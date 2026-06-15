import { obtenerProductos } from "./modelo.productos.mjs";
import { obtenerProductoPorId } from "./modelo.productos.mjs";
import { crearProducto } from "./modelo.productos.mjs";
import { actualizarProducto } from "./modelo.productos.mjs";
import { eliminarProducto } from "./modelo.productos.mjs";



export async function getProductos(req, res) {

    const productos = await obtenerProductos();

    res.json(productos);

}


export async function getProductoPorId(req, res) {

    const producto = await obtenerProductoPorId(req.params.id);

    res.json(producto);

}




export async function postProducto(req, res) {

    const producto = await crearProducto(req.body);

    res.status(201).json(producto);

}




export async function putProducto(req, res) {

    const producto = await actualizarProducto(
        req.params.id,
        req.body
    );

    res.json(producto);

}


export async function deleteProducto(req, res) {

    const producto = await eliminarProducto(req.params.id);

    res.json(producto);

}