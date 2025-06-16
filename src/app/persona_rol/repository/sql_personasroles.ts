export const SQL_PERSONAS_ROLES = {
    FIND_ALL: `SELECT pr.id,
            r.nombre AS rol,
            p.nombre AS persona
        FROM personasRoles pr
        INNER JOIN roles r ON pr.codRol = r.id
        INNER JOIN personas p ON pr.codPersona = p.id`,

    FIND_ID: `SELECT pr.id,
            r.nombre AS rol,
            p.nombre AS persona
        FROM personasRoles pr
        INNER JOIN roles r ON pr.codRol = r.id
        INNER JOIN personas p ON pr.codPersona = p.id
        WHERE pr.id = $1`,

    FIND_BY_PERSONA: `SELECT pr.id,
            r.nombre AS rol
        FROM personasRoles pr
        INNER JOIN roles r ON pr.codRol = r.id
        WHERE pr.codPersona = $1`,

    HOW_MANY: `SELECT count(id) as cantidad
        FROM personasRoles
        WHERE codRol = $1 and codPersona = $2`,

    HOW_MANY_ROL: `SELECT count(id) as cantidad
        FROM roles
        WHERE id = $1`,

    HOW_MANY_PERSONA: `SELECT count(id) as cantidad
        FROM personas
        WHERE id = $1`,

    ADD: `INSERT INTO personasRoles (
            codRol,
            codPersona)
        VALUES ($1, $2)
        RETURNING id`,

    UPDATE: `UPDATE personasRoles
        SET codRol = $1,
            codPersona = $2
        WHERE id = $3
        RETURNING id`,

    DELETE: `DELETE FROM personasRoles
        WHERE id = $1`
};
