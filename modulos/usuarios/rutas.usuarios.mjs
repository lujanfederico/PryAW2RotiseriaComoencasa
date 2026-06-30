import express from "express";

import { crearUsuario, login, logout} from "./controlador.usuarios.mjs";

import { verificarToken } from "./middleware.autenticacion.mjs";


const router = express.Router();



// Registro de usuarios
router.post("/registro", crearUsuario);


// Login
router.post("/login", login);


// Cerrar sesion
router.post("/logout", logout);


// Verificar sesión
router.get("/verificar", verificarToken, (req, res) => {

    res.json({
        mensaje: "Usuario autenticado",
        usuario: req.usuario
    });

});



export default router;