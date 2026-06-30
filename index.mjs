import "dotenv/config";

import express from "express";
import cookieParser from "cookie-parser";

import rutasProductos from "./modulos/productos/rutas.productos.mjs";
import rutasUsuarios from "./modulos/usuarios/rutas.usuarios.mjs";



const app = express();


app.use(express.json());

app.use(cookieParser());


app.use(express.static("front"));

app.use('/recursos', express.static('recursos'));


app.use("/api/productos", rutasProductos);

app.use("/api/usuarios", rutasUsuarios);



app.listen(3000, () => {
    console.log("Servidor funcionando en puerto 3000");
});