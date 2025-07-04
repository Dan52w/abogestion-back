export const SQL_DOCUMENTOS = {
    FIND_ALL : `SELECT d.id,
            c.titulo AS caso,
            c.id AS codCaso,
            CASE 
                WHEN c.codCasoPadre = 1 THEN 'Caso principal'
                ELSE cp.titulo
            END AS derivado,
            td.nombre AS tipoDocumento,
            d.nombre,
            d.url,
            d.fechaSubida
        FROM documentos d
        INNER JOIN tipoDocumentos td ON d.tipoDocumento = td.id
        INNER JOIN casos c ON d.codCaso = c.id
        LEFT JOIN casos cp ON c.codCasoPadre = cp.id`,

    FIND_URL : `SELECT url,
            nombre
        FROM documentos
        WHERE id = $1`,

    FIND_ID : `SELECT d.id,
            c.titulo AS caso,
            c.id AS codCaso,
            CASE 
                WHEN c.codCasoPadre = 1 THEN 'Caso principal'
                ELSE cp.titulo
            END AS derivado,
            td.nombre AS tipoDocumento,
            d.nombre,
            d.url,
            d.fechaSubida
        FROM documentos d
        INNER JOIN tipoDocumentos td ON d.tipoDocumento = td.id
        INNER JOIN casos c ON d.codCaso = c.id
        LEFT JOIN casos cp ON c.codCasoPadre = cp.id
        WHERE d.id = $1`,

    FIND_NAME : `SELECT d.id,
            c.titulo AS caso,
            c.id AS codCaso,
            CASE 
                WHEN c.codCasoPadre = 1 THEN 'Caso principal'
                ELSE cp.titulo
            END AS derivado,
            td.nombre AS tipoDocumento,
            d.nombre,
            d.url,
            d.fechaSubida
        FROM documentos d
        INNER JOIN tipoDocumentos td ON d.tipoDocumento = td.id
        INNER JOIN casos c ON d.codCaso = c.id
        LEFT JOIN casos cp ON c.codCasoPadre = cp.id
        WHERE d.nombre = $1`,

    FIND_NAME_LIKE : `SELECT d.id,
            c.titulo AS caso,
            c.id AS codCaso,
            CASE 
                WHEN c.codCasoPadre = 1 THEN 'Caso principal'
                ELSE cp.titulo
            END AS derivado,
            td.nombre AS tipoDocumento,
            d.nombre,
            d.url,
            d.fechaSubida
        FROM documentos d
        INNER JOIN tipoDocumentos td ON d.tipoDocumento = td.id
        INNER JOIN casos c ON d.codCaso = c.id
        LEFT JOIN casos cp ON c.codCasoPadre = cp.id
        WHERE d.nombre ILIKE '%' || $1 || '%'`,

    FIND_TIPODOCUMENTO : `SELECT d.id,
            c.titulo AS caso,
            c.id AS codCaso,
            CASE 
                WHEN c.codCasoPadre = 1 THEN 'Caso principal'
                ELSE cp.titulo
            END AS derivado,
            td.nombre AS tipoDocumento,
            d.nombre,
            d.url,
            d.fechaSubida
        FROM documentos d
        INNER JOIN tipoDocumentos td ON d.tipoDocumento = td.id
        INNER JOIN casos c ON d.codCaso = c.id
        LEFT JOIN casos cp ON c.codCasoPadre = cp.id
        WHERE td.nombre = $1`,

    FIND_CASO : `SELECT SELECT d.id,
            c.titulo AS caso,
            c.id AS codCaso,
            CASE 
                WHEN c.codCasoPadre = 1 THEN 'Caso principal'
                ELSE cp.titulo
            END AS derivado,
            td.nombre AS tipoDocumento,
            d.nombre,
            d.url,
            d.fechaSubida
        FROM documentos d
        INNER JOIN tipoDocumentos td ON d.tipoDocumento = td.id
        INNER JOIN casos c ON d.codCaso = c.id
        LEFT JOIN casos cp ON c.codCasoPadre = cp.id
        WHERE d.nombre = $1`,

    FIND_BETWEEN_FECHAS: `SELECT d.id,
            c.titulo AS caso,
            c.id AS codCaso,
            CASE 
                WHEN c.codCasoPadre = 1 THEN 'Caso principal'
                ELSE cp.titulo
            END AS derivado,
            td.nombre AS tipoDocumento,
            d.nombre,
            d.url,
            d.fechaSubida
        FROM documentos d
        INNER JOIN tipoDocumentos td ON d.tipoDocumento = td.id
        INNER JOIN casos c ON d.codCaso = c.id
        LEFT JOIN casos cp ON c.codCasoPadre = cp.id
        WHERE d.fechaSubida BETWEEN $1 AND $2`,

    HOW_MANY_CASO : `SELECT COUNT(id) AS cantidad
            FROM casos
            WHERE id = $1`,

    HOW_MANE_TIPODOCUMENTO : `SELECT COUNT(id) AS cantidad
            FROM tipoDocumentos
            WHERE id = $1`,

    ADD : `INSERT INTO documentos(
            codCaso,
            tipoDocumento,
            nombre,
            url,
            fechaSubida)
        VALUES($1, $2, $3, $4, $5)
        RETURNING id, codCaso, tipoDocumento, nombre, url, fechaSubida`,
}