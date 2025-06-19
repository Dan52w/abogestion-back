export const SQL_TIPOSETIQUETAS = {
    FIND_ALL: `SELECT id,
            nombre
        FROM tipoetiquetas`,

    FIND_ID: `SELECT id,
            nombre
        FROM tipoetiquetas
        WHERE id = $1`,

    FIND_NAME: `SELECT id,
            nombre
        FROM tipoetiquetas
        WHERE nombre = $1`,

    HOW_MANY: `SELECT count(nombre) as cantidad
        FROM tipoetiquetas
        WHERE nombre = $1`,

    HOW_MANY_ID: `SELECT count(id) as cantidad
        FROM tipoetiquetas
        WHERE id = $1`,

    HOW_MANY_SUBTIPO: `SELECT count(codTipoEtiqueta) as cantidad
        FROM etiqueta
        WHERE codTipoEtiqueta = $1`,

    ADD: `INSERT INTO tipoetiquetas (nombre)
        VALUES ($1)
    RETURNING id, nombre`,

    UPDATE: `UPDATE tipoetiquetas
        SET nombre = $1
        WHERE id = $2
    RETURNING id, nombre`,

    DELETE: `DELETE FROM tipoetiquetas
    WHERE id = $1`
}