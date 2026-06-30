import { registrarUsuario, buscarUsuario } from "./modelo.usuarios.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export async function crearUsuario(req, res){

    try {

        const { usuario, password } = req.body;

        const nuevoUsuario = await registrarUsuario(usuario, password);

        res.json({
            mensaje: "Usuario creado correctamente",
            usuario: nuevoUsuario
        });


    } catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error al crear usuario"
        });

    }

}



export async function login(req,res){

    try {

        const { usuario, password } = req.body;


        const usuarioEncontrado = await buscarUsuario(usuario);


        if(!usuarioEncontrado){

            return res.status(401).json({
                mensaje:"Usuario incorrecto"
            });

        }


        const passwordCorrecta = await bcrypt.compare(
            password,
            usuarioEncontrado.password
        );


        if(!passwordCorrecta){

            return res.status(401).json({
                mensaje:"Contraseña incorrecta"
            });

        }


        const token = jwt.sign(
            {
                id: usuarioEncontrado.id,
                usuario: usuarioEncontrado.usuario
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"2h"
            }
        );


        res.cookie(
            "token",
            token,
            {
                httpOnly:true,
                maxAge:7200000
            }
        );


        res.json({
            mensaje:"Login correcto"
        });



    } catch(error){

        console.log(error);

        res.status(500).json({
            mensaje:"Error en login"
        });

    }

}



export function logout(req, res) {
    res.clearCookie("token", {
        httpOnly: true,
        path: "/"
    });

    res.json({
        mensaje: "Sesión cerrada correctamente"
    });
}