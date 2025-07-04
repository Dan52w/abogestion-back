export const SQL_TIPOVINCULACION = {
    FIND_ALL: `
        SELECT id,
            nombre
        FROM tipovinculaciones
    `,

    FIND_ID: `
        SELECT id,
            nombre
        FROM tipovinculaciones
        WHERE id = $1
    `,

    FIND_NAME: `
        SELECT id,
            nombre
        FROM tipovinculaciones
        WHERE nombre = $1
    `,

    FIND_NAME_LIKE: `
        SELECT id,
            nombre
        FROM tipovinculaciones
        WHERE nombre ILIKE '%' || $1 || '%'
    `,

    HOW_MANY: `
        SELECT COUNT(id) AS cantidad
        FROM tipovinculaciones
        WHERE nombre = $1
    `,

    ADD: `
        INSERT INTO tipovinculaciones (
            nombre
        )
        VALUES ($1)
        RETURNING id, nombre
    `,

    UPDATE: `
        UPDATE tipovinculaciones
        SET nombre = $1
        WHERE id = $2
        RETURNING id, nombre
    `,

    DELETE: `
        DELETE FROM tipovinculaciones
        WHERE id = $1
    `
};