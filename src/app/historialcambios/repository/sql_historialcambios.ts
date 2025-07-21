export const SQL_HISTORIAL_CAMBIOS = {
    FIND_ALL: `SELECT h.id,
            h.codCaso,
            h.codPersona,
            h.fechaCambio,
            h.observaciones,
            p.nombre AS nombre_persona,
            p.apellido AS apellido_persona
        FROM historialCambios h
        INNER JOIN personas p ON h.codPersona = p.id
        ORDER BY h.fechaCambio DESC;`,

    FIND_CODCASO: `SELECT h.id,
            h.codCaso,
            h.codPersona,
            h.fechaCambio,
            h.observaciones,
            p.nombre AS nombre_persona,
            p.apellido AS apellido_persona
        FROM historialCambios h
        INNER JOIN personas p ON h.codPersona = p.id
        WHERE h.codCaso = $1
        ORDER BY h.fechaCambio DESC;`,

    ADD: `INSERT INTO historialCambios (codcaso, codpersona, fechacambio, observaciones)
        VALUES ($1, $2, $3, $4)
        RETURNING id;`,

    HOW_MANY_CASO: `SELECT COUNT(id) AS cantidad
        FROM casos
        WHERE id = $1`,

    HOW_MANY_PERSONA: `SELECT COUNT(id) AS cantidad
        FROM personas
        WHERE id = $1`
}