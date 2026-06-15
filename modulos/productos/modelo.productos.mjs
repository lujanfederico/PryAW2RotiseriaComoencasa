import pool from "../../bd/conexion.mjs";

export async function obtenerProductos() {
    const resultado = await pool.query("SELECT * FROM menu ORDER BY id ASC");
    return resultado.rows;
}

export async function obtenerProductoPorId(id) {
    const resultado = await pool.query(
        "SELECT * FROM menu WHERE id = $1",
        [id]
    );
    return resultado.rows[0];
}

export async function crearProducto(producto) {
    const { nombre, descripcion, imagen, precio } = producto;
    const resultado = await pool.query(
        `INSERT INTO menu (nombre, descripcion, imagen, precio)
         VALUES ($1, $2, $3, $4)
         RETURNING *`,
        [nombre, descripcion, imagen, precio]
    );
    return resultado.rows[0];
}

export async function actualizarProducto(id, producto) {
    const { nombre, descripcion, imagen, precio } = producto;
    const resultado = await pool.query(
        `UPDATE menu
         SET nombre = $1,
             descripcion = $2,
             imagen = $3,
             precio = $4
         WHERE id = $5
         RETURNING *`,
        [nombre, descripcion, imagen, precio, id]
    );
    return resultado.rows[0];
}

export async function eliminarProducto(id) {
    const resultado = await pool.query(
        "DELETE FROM menu WHERE id = $1 RETURNING *",
        [id]
    );
    return resultado.rows[0];
}