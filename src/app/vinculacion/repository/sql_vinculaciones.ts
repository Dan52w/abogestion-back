export const SQL_VINCULACION = {
    FIND_ALL : `SELECT v.codPersona,
            v.codCaso,
            v.codTipoVinculacion,
            c.titulo,
            c.descripcion,
            e.nombre AS estado,
            c.fechaInicio,
            c.cliente,
            stc.nombre AS subtipo,
            tc.nombre AS tipo,
            c.firma,
            CASE 
                WHEN c.codCasoPadre = 1 THEN 'Caso principal'
                ELSE cp.titulo
            END AS derivado
        FROM vinculaciones v
        INNER JOIN casos c ON v.codCaso = c.id
        INNER JOIN estados e ON c.estado = e.id
        INNER JOIN subtipocasos stc ON c.codSubtipoCaso = stc.id
        INNER JOIN tipocasos tc ON stc.codTipoCaso = tc.id
        LEFT JOIN casos cp ON c.codCasoPadre = cp.id
        WHERE c.firma = $1`,

    FIND_TITLE_LIKE : `SELECT v.codPersona,
            v.codCaso,
            v.codTipoVinculacion,
            c.titulo,
            c.descripcion,
            e.nombre AS estado,
            c.fechaInicio,
            c.cliente,
            stc.nombre AS subtipo,
            tc.nombre AS tipo,
            c.firma,
            CASE 
                WHEN c.codCasoPadre = 1 THEN 'Caso principal'
                ELSE cp.titulo
            END AS derivado
        FROM vinculaciones v
        INNER JOIN casos c ON v.codCaso = c.id
        INNER JOIN estados e ON c.estado = e.id
        INNER JOIN subtipocasos stc ON c.codSubtipoCaso = stc.id
        INNER JOIN tipocasos tc ON stc.codTipoCaso = tc.id
        LEFT JOIN casos cp ON c.codCasoPadre = cp.id
        WHERE c.firma = $1 AND c.titulo ILIKE '%' || $2 || '%'`,

    FIND_SUPTIPO : `SELECT v.codPersona,
            v.codCaso,
            v.codTipoVinculacion,
            c.titulo,
            c.descripcion,
            e.nombre AS estado,
            c.fechaInicio,
            c.cliente,
            stc.nombre AS subtipo,
            tc.nombre AS tipo,
            c.firma,
            CASE 
                WHEN c.codCasoPadre = 1 THEN 'Caso principal'
                ELSE cp.titulo
            END AS derivado
        FROM vinculaciones v
        INNER JOIN casos c ON v.codCaso = c.id
        INNER JOIN estados e ON c.estado = e.id
        INNER JOIN subtipocasos stc ON c.codSubtipoCaso = stc.id
        INNER JOIN tipocasos tc ON stc.codTipoCaso = tc.id
        LEFT JOIN casos cp ON c.codCasoPadre = cp.id
        WHERE c.firma = $1 AND stc.nombre ILIKE '%' || $2 || '%'`,

    FIND_ESTADO : `SELECT v.codPersona,
            v.codCaso,
            v.codTipoVinculacion,
            c.titulo,
            c.descripcion,
            e.nombre AS estado,
            c.fechaInicio,
            c.cliente,
            stc.nombre AS subtipo,
            tc.nombre AS tipo,
            c.firma,
            CASE 
                WHEN c.codCasoPadre = 1 THEN 'Caso principal'
                ELSE cp.titulo
            END AS derivado
        FROM vinculaciones v
        INNER JOIN casos c ON v.codCaso = c.id
        INNER JOIN estados e ON c.estado = e.id
        INNER JOIN subtipocasos stc ON c.codSubtipoCaso = stc.id
        INNER JOIN tipocasos tc ON stc.codTipoCaso = tc.id
        LEFT JOIN casos cp ON c.codCasoPadre = cp.id
        WHERE c.firma = $1 AND WHERE e.nombre ILIKE '%' || $1 || '%'`,

    FIND_PERSONA : `SELECT v.codPersona,
            v.codCaso,
            v.codTipoVinculacion,
            c.titulo,
            c.descripcion,
            e.nombre AS estado,
            c.fechaInicio,
            c.cliente,
            stc.nombre AS subtipo,
            tc.nombre AS tipo,
            c.firma,
            CASE 
                WHEN c.codCasoPadre = 1 THEN 'Caso principal'
                ELSE cp.titulo
            END AS derivado
        FROM vinculaciones v
        INNER JOIN casos c ON v.codCaso = c.id
        INNER JOIN estados e ON c.estado = e.id
        INNER JOIN subtipocasos stc ON c.codSubtipoCaso = stc.id
        INNER JOIN tipocasos tc ON stc.codTipoCaso = tc.id
        LEFT JOIN casos cp ON c.codCasoPadre = cp.id
        WHERE c.firma = $1 AND v.codPersona = $2`,

    HOW_MANY_PERSONA : `SELECT COUNT(id) AS cantidad
        FROM personas
        Where id = $1`,

    HOW_MANY_CASO : `SELECT COUNT(id) AS cantidad
        FROM casos
        Where id = $1`,

    HOW_MANY_TIPVIN : `SELECT COUNT(id) AS cantidad
        FROM tipovinculaciones
        Where id = $1`,

    HOW_MANY : `SELECT COUNT(codCaso) AS cantidad
        FROM vinculaciones
        Where codPersona = $1 AND codCaso = $2 AND codTipoVinculacion = $3`,

    ADD : `INSERT INTO vinculaciones (
            codPersona,
            codCaso,
            codTipoVinculacion)
        VALUES ($1, $2, $3)
        RETURNING codPersona, codCaso, codTipoVinculacion`,

    UPDATE : `UPDATE vinculaciones
        SET codTipoVinculacion = $1
        WHERE codPersona = $2 AND codCaso = $3
        RETURNING codPersona, codCaso, codTipoVinculacion`,

    DELETE: `DELETE FROM vinculaciones
        WHERE codPersona = $1 AND codCaso = $2 AND codTipoVinculacion = $3`,
};