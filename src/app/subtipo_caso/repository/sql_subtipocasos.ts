export const SQL_SUBTIPOCASO = {
    FIND_ALL: `SELECT stc.id,
            stc.nombre,
            tc.nombre AS tipo_caso
    FROM subtipocasos stc
    INNER JOIN tipocasos tc ON stc.codTipoCaso = tc.id`,

    FIND_ID: `SELECT stc.id,
            stc.nombre,
            tc.nombre AS tipo_caso
    FROM subtipocasos stc
    INNER JOIN tipocasos tc ON stc.codTipoCaso = tc.id
    WHERE stc.id = $1`,

    FIND_NAME: `SELECT stc.id,
            stc.nombre,
            tc.nombre AS tipo_caso
    FROM subtipocasos stc
    INNER JOIN tipocasos tc ON stc.codTipoCaso = tc.id
    WHERE stc.nombre = $1`,

    FIND_NAME_LIKE: `SELECT stc.id,
            stc.nombre,
            tc.nombre AS tipo_caso
    FROM subtipocasos stc
    INNER JOIN tipocasos tc ON stc.codTipoCaso = tc.id
    WHERE stc.nombre ILIKE '%' || $1 || '%'`,

    FIND_BY_TIPO_NOMBRE: `SELECT stc.id,
            stc.nombre,
            tc.nombre AS tipo_caso
        FROM subtipocasos stc
        INNER JOIN tipocasos tc ON stc.codTipoCaso = tc.id
        WHERE tc.nombre ILIKE '%' || $1 || '%'`,

    HOW_MANY: `SELECT COUNT(id) AS cantidad
        FROM subtipocasos
        WHERE nombre = $1`,

    ADD: `INSERT INTO subtipocasos (
            nombre,
            codTipoCaso)
        VALUES ($1, $2)
        RETURNING id, nombre`,

    UPDATE: `UPDATE subtipocasos
        SET nombre = $1,
            codTipoCaso = $2
        WHERE id = $3
        RETURNING id, nombre`,

    DELETE: `DELETE FROM subtipocasos
        WHERE id = $1`
};
