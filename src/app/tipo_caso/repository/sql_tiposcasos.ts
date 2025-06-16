export const SQL_TIPOSCASOS = {
    FIND_ALL: `SELECT id,
            nombre
        FROM tipocasos`,

    FIND_ID: `SELECT id,
            nombre
        FROM tipocasos
        WHERE id = $1`,

    FIND_NAME: `SELECT id,
            nombre
        FROM tipocasos
        WHERE nombre = $1`,

    HOW_MANY: `SELECT count(nombre) as cantidad
        FROM tipocasos
        WHERE nombre = $1`,

    HOW_MANY_ID: `SELECT count(id) as cantidad
        FROM tipocasos
        WHERE id = $1`,

    HOW_MANY_SUBTIPO: `SELECT count(codTipoCaso) as cantidad
        FROM subTipoCasos
        WHERE codTipoCaso = $1`,

    ADD: `INSERT INTO tipocasos (nombre)
        VALUES ($1)
    RETURNING id, nombre`,

    UPDATE: `UPDATE tipocasos
        SET nombre = $1
        WHERE id = $2
    RETURNING id, nombre`,

    DELETE: `DELETE FROM tipocasos
    WHERE id = $1`
}