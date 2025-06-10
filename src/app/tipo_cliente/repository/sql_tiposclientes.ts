export const SQL_TIPOSCLIENTES = {
    FIND_ALL: `SELECT id,
        nombre
        FROM tiposClientes`,

    FIND_ID: `SELECT id,
        nombre
    FROM tiposClientes
    WHERE id = $1`,

    FIND_NAME: `SELECT id,
        nombre
    FROM tiposClientes
    WHERE nombre = $1`,

    HOW_MANY: `SELECT count(nombre) as cantidad
    FROM tiposClientes
    WHERE nombre = $1`,

    HOW_MANY_CLIENTES: `SELECT count(tipoCliente) as cantidad
    FROM clientes
    WHERE tipoCliente = $1`,

    ADD: `INSERT INTO tiposClientes (nombre)
    VALUES ($1)
    RETURNING id, nombre`,

    UPDATE: `UPDATE tiposClientes
    SET nombre = $1
    WHERE id = $2
    RETURNING id, nombre`,

    DELETE: `DELETE FROM tiposClientes
    WHERE id = $1`
}