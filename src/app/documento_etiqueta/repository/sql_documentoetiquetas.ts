export const SQL_DOCUMENTO_ETIQUETA = {
    FIND_ALL: `SELECT de.codDocumento,
            de.codEtiqueta,
            d.nombre AS nombreDocumento,
            e.nombre AS nombreEtiqueta
        FROM documentosEtiquetas de
        INNER JOIN documentos d ON de.codDocumento = d.id
        INNER JOIN etiquetas e ON de.codEtiqueta = e.id`,

    FIND_BY_DOCUMENTO: `SELECT de.codDocumento,
            de.codEtiqueta,
            e.nombre AS nombreEtiqueta
        FROM documentosEtiquetas de
        INNER JOIN etiquetas e ON de.codEtiqueta = e.id
        WHERE de.codDocumento = $1`,

    FIND_BY_ETIQUETA: `SELECT de.codDocumento,
            de.codEtiqueta,
            d.nombre AS nombreDocumento
        FROM documentosEtiquetas de
        INNER JOIN documentos d ON de.codDocumento = d.id
        WHERE de.codEtiqueta = $1`,

    HOW_MANY: `SELECT COUNT(*) AS cantidad
        FROM documentosEtiquetas
        WHERE codDocumento = $1 AND codEtiqueta = $2`,

    HOW_MANY_DOC: `SELECT COUNT(id) AS cantidad
        FROM documentos
        WHERE id = $1`,

    HOW_MANY_ETI: `SELECT COUNT(id) AS cantidad
        FROM etiquetas
        WHERE id = $1`,

    ADD: `INSERT INTO documentosEtiquetas (
            codDocumento,
            codEtiqueta)
        VALUES ($1, $2)`,

    DELETE: `DELETE FROM documentosEtiquetas
        WHERE codDocumento = $1 AND codEtiqueta = $2`,

    DELETE_CODDOC: `DELETE FROM documentosEtiquetas
        WHERE codDocumento = $1`
};
