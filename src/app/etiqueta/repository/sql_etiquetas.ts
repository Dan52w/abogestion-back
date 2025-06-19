export const SQL_ETIQUETA = {
    FIND_ALL: `SELECT e.id,
            e.nombre,
            te.nombre AS tipo_etiqueta
        FROM etiquetas e
        INNER JOIN tipoetiquetas te ON e.codTipoEtiqueta = te.id`,

    FIND_ID: `SELECT e.id,
            e.nombre,
            te.nombre AS tipo_etiqueta
        FROM etiquetas e
        INNER JOIN tipoetiquetas te ON e.codTipoEtiqueta = te.id
        WHERE e.id = $1`,

    FIND_NAME: `SELECT e.id,
            e.nombre,
            te.nombre AS tipo_etiqueta
        FROM etiquetas e
        INNER JOIN tipoetiquetas te ON e.codTipoEtiqueta = te.id
        WHERE e.nombre = $1`,

    FIND_NAME_LIKE: `SELECT e.id,
            e.nombre,
            te.nombre AS tipo_etiqueta
        FROM etiquetas e
        INNER JOIN tipoetiquetas te ON e.codTipoEtiqueta = te.id
        WHERE e.nombre ILIKE '%' || $1 || '%'`,

    FIND_BY_TIPO_NOMBRE: `SELECT e.id,
            e.nombre,
            te.nombre AS tipo_etiqueta
        FROM etiquetas e
        INNER JOIN tipoetiquetas te ON e.codTipoEtiqueta = te.id
        WHERE te.nombre ILIKE '%' || $1 || '%'`,

    FIND_TIPO_ETIQUETA_NOMBRE: `SELECT id,
            nombre
        FROM tipoetiquetas
        WHERE nombre = $1`,

    FIND_TIPO_ETIQUETA_ID: `SELECT id,
            nombre
        FROM tipoetiquetas
        WHERE id = $1`,

    HOW_MANY: `SELECT COUNT(id) AS cantidad
        FROM etiquetas
        WHERE nombre = $1`,

    ADD: `INSERT INTO etiquetas (
            nombre,
            codTipoEtiqueta)
        VALUES ($1, $2)
        RETURNING id, nombre`,

    UPDATE: `UPDATE etiquetas
        SET nombre = $1,
            codTipoEtiqueta = $2
        WHERE id = $3
        RETURNING id, nombre`,

    DELETE: `DELETE FROM etiquetas
        WHERE id = $1`
};
