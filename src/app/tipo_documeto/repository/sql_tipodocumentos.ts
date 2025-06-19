export const SQL_TIPODOCUMENTO = {
    FIND_ALL: `SELECT id,
            nombre,
            descripcion
        FROM tipodocumentos`,

    FIND_ID: `SELECT id,
            nombre,
            descripcion
        FROM tipodocumentos
        WHERE id = $1`,

    FIND_NAME: `SELECT id,
            nombre,
            descripcion
        FROM tipodocumentos
        WHERE nombre = $1`,

    FIND_NAME_LIKE: `SELECT id,
            nombre,
            descripcion
        FROM tipodocumentos
        WHERE nombre ILIKE '%' || $1 || '%'`,

    HOW_MANY: `SELECT COUNT(id) AS cantidad
        FROM tipodocumentos
        WHERE nombre = $1`,

    ADD: `INSERT INTO tipodocumentos (
            nombre,
            descripcion)
        VALUES ($1, $2)
        RETURNING id, nombre`,

    UPDATE: `UPDATE tipodocumentos
        SET nombre = $1,
            descripcion = $2
        WHERE id = $3
        RETURNING id, nombre`,

    DELETE: `DELETE FROM tipodocumentos
        WHERE id = $1`
};
