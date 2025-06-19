export const SQL_ESTADO = {
    FIND_ALL: `SELECT id,
            nombre
        FROM estados`,

    FIND_ID: `SELECT id,
            nombre
        FROM estados
        WHERE id = $1`,

    FIND_NAME: `SELECT id,
            nombre
        FROM estados
        WHERE nombre = $1`,

    FIND_NAME_LIKE: `SELECT id,
            nombre
        FROM estados
        WHERE nombre ILIKE '%' || $1 || '%'`,

    HOW_MANY: `SELECT COUNT(id) AS cantidad
        FROM estados
        WHERE nombre = $1`,

    ADD: `INSERT INTO estados (
            nombre)
        VALUES ($1)
        RETURNING id, nombre`,

    UPDATE: `UPDATE estados
        SET nombre = $1
        WHERE id = $2
        RETURNING id, nombre`,

    DELETE: `DELETE FROM estados
        WHERE id = $1`
};
