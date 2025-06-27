export const SQL_CASOS = {
    FIND_ALL: `SELECT c.id,
            c.titulo,
            c.descripcion,
            e.nombre AS estado,
            c.fechaInicio,
            stc.nombre AS subtipo,
            tc.nombre AS tipo,
            CASE 
                WHEN c.codCasoPadre = 1 THEN 'Caso principal'
                ELSE cp.titulo
            END AS derivado
        FROM casos c
        INNER JOIN estados e ON c.estado = e.id
        INNER JOIN subtipocasos stc ON c.codSubtipoCaso = stc.id
        INNER JOIN tipocasos tc ON stc.codTipoCaso = tc.id
        LEFT JOIN casos cp ON c.codCasoPadre = cp.id`,

    FIND_ID: `SELECT c.id,
            c.titulo,
            c.descripcion,
            e.nombre AS estado,
            c.fechaInicio,
            stc.nombre AS subtipo,
            tc.nombre AS tipo,
            CASE 
                WHEN c.codCasoPadre = 1 THEN 'Caso principal'
                ELSE cp.titulo
            END AS derivado
        FROM casos c
        INNER JOIN subtipocasos stc ON c.codSubtipoCaso = stc.id
        INNER JOIN estados e ON c.estado = e.id
        INNER JOIN tipocasos tc ON stc.codTipoCaso = tc.id
        LEFT JOIN casos cp ON c.codCasoPadre = cp.id
        WHERE c.id = $1`,

    FIND_BY_TITLE_LIKE: `SELECT c.id,
            c.titulo,
            c.descripcion,
            e.nombre AS estado,
            c.fechaInicio,
            stc.nombre AS subtipo,
            tc.nombre AS tipo,
            CASE 
                WHEN c.codCasoPadre = 1 THEN 'Caso principal'
                ELSE cp.titulo
            END AS derivado
        FROM casos c
        INNER JOIN estados e ON c.estado = e.id
        INNER JOIN subtipocasos stc ON c.codSubtipoCaso = stc.id
        INNER JOIN tipocasos tc ON stc.codTipoCaso = tc.id
        LEFT JOIN casos cp ON c.codCasoPadre = cp.id
        WHERE c.titulo ILIKE '%' || $1 || '%'`,

    FIND_BY_SUBTIPO: `SELECT c.id,
            c.titulo,
            c.descripcion,
            e.nombre AS estado,
            c.fechaInicio,
            stc.nombre AS subtipo,
            CASE 
                WHEN c.codCasoPadre = 1 THEN 'Caso principal'
                ELSE cp.titulo
            END AS derivado
        FROM casos c
        INNER JOIN estados e ON c.estado = e.id
        INNER JOIN subtipocasos stc ON c.codSubtipoCaso = stc.id
        LEFT JOIN casos cp ON c.codCasoPadre = cp.id
        WHERE stc.nombre ILIKE '%' || $1 || '%'`,

    FIND_BY_TIPO: `SELECT c.id,
            c.titulo,
            c.descripcion,
            e.nombre AS estado,
            c.fechaInicio,
            stc.nombre AS subtipo,
            tc.nombre AS tipo,
            CASE 
                WHEN c.codCasoPadre = 1 THEN 'Caso principal'
                ELSE cp.titulo
            END AS derivado
        FROM casos c
        INNER JOIN estados e ON c.estado = e.id
        INNER JOIN subtipocasos stc ON c.codSubtipoCaso = stc.id
        INNER JOIN tipocasos tc ON stc.codTipoCaso = tc.id
        LEFT JOIN casos cp ON c.codCasoPadre = cp.id
        WHERE tc.nombre ILIKE '%' || $1 || '%'`,

    FIND_BY_ESTADO: `SELECT c.id,
            c.titulo,
            c.descripcion,
            e.nombre AS estado,
            c.fechaInicio,
            stc.nombre AS subtipo,
            tc.nombre AS tipo,
            CASE 
                WHEN c.codCasoPadre = 1 THEN 'Caso principal'
                ELSE cp.titulo
            END AS derivado
        FROM casos c
        INNER JOIN estados e ON c.estado = e.id
        INNER JOIN subtipocasos stc ON c.codSubtipoCaso = stc.id
        INNER JOIN tipocasos tc ON stc.codTipoCaso = tc.id
        LEFT JOIN casos cp ON c.codCasoPadre = cp.id
        WHERE e.nombre ILIKE '%' || $1 || '%'`,

    HOW_MANY: `SELECT count(id) AS cantidad
        FROM casos
        WHERE titulo = $1`,

    HOW_MANY_HISTOCAMBIO: `SELECT count(codCaso) AS cantidad
        FROM historialCambio
        WHERE codCaso = $1`,

    ADD: `INSERT INTO casos (
            titulo,
            descripcion,
            estado,
            fechaInicio,
            codSubtipoCaso,
            codCasoPadre)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id, titulo, descripcion, estado, fechaInicio, codSubtipoCaso, codCasoPadre`,

    UPDATE: `UPDATE casos
        SET titulo = $1,
            descripcion = $2,
            estado = $3,
            fechaInicio = $4,
            codSubtipoCaso = $5,
            codCasoPadre = $6
        WHERE id = $7
        RETURNING id, titulo, descripcion, estado, fechaInicio, codSubtipoCaso, codCasoPadre`,

    DELETE: `DELETE FROM casos
        WHERE id = $1`
};
