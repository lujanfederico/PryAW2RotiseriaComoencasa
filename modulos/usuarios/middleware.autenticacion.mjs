import jwt from "jsonwebtoken";


export function verificarToken(req, res, next) {

    try {
        
        console.log("PASO POR EL MIDDLEWARE");

        const token = req.cookies.token;


        if (!token) {

            return res.status(401).json({
                mensaje: "No autorizado. Debe iniciar sesión."
            });

        }


        const usuario = jwt.verify(
            token,
            process.env.JWT_SECRET
        );


        req.usuario = usuario;


        next();


    } catch (error) {

        return res.status(401).json({
            mensaje: "Token inválido o expirado."
        });

    }

}