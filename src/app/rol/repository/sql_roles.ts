export const SQL_ROL = {
    FIND_ALL: `SELECT id,
        nombre
        FROM roles`,

    FIND_ID: `SELECT id,
        nombre
    FROM roles
    WHERE id = $1`,

    FIND_NAME: `SELECT id,
        nombre
    FROM roles
    WHERE nombre = $1`,

    HOW_MANY: `SELECT count(nombre) as cantidad
    FROM roles
    WHERE nombre = $1`,

    ADD: `INSERT INTO roles (nombre)
    VALUES ($1)
    RETURNING id, nombre`,

    UPDATE: `UPDATE roles
    SET nombre = $1
    WHERE id = $2
    RETURNING id, nombre`,

    DELETE: `DELETE FROM roles
    WHERE id = $1`
}