import express from "express";
import rutasProductos from "./modulos/productos/rutas.productos.mjs";

const app = express();

app.use(express.json());

app.use(express.static("front"));

app.use('/recursos', express.static('recursos'));

app.use("/api/productos", rutasProductos);

app.listen(3000, () => {
    console.log("Servidor funcionando en puerto 3000");
});