import pool from "../../bd/conexion.mjs";
import bcrypt from "bcrypt";

export async function registrarUsuario(usuario, password) {

    const passwordHash = await bcrypt.hash(password, 10);

    const consulta = `
        INSERT INTO usuarios (usuario, password)
        VALUES ($1, $2)
        RETURNING id, usuario
    `;

    const valores = [usuario, passwordHash];

    const resultado = await pool.query(consulta, valores);

    return resultado.rows[0];
}

export async function buscarUsuario(usuario) {

    const consulta = `
        SELECT *
        FROM usuarios
        WHERE usuario = $1
    `;

    const resultado = await pool.query(consulta, [usuario]);

    return resultado.rows[0];
}