export const SQL_PERSONA = {
    FIND_ALL: `SELECT p.id,
            p.cedula,
            p.nombre,
            p.apellido,
            p.fecha_nacimiento,
            p.correo,
            p.telefono,
            p.direccion,
            p.activo,
            c.nombre AS cliente
        FROM personas p
        INNER JOIN clientes c ON p.codCliente = c.id`,

    FIND_ID: `SELECT p.id,
            p.cedula,
            p.nombre,
            p.apellido,
            p.fecha_nacimiento,
            p.correo,
            p.telefono,
            p.direccion,
            p.activo,
            c.nombre AS cliente
        FROM personas p
        INNER JOIN clientes c ON p.codCliente = c.id
        WHERE p.id = $1`,

    FIND_CEDULA: `SELECT p.id,
            p.cedula,
            p.nombre,
            p.apellido,
            p.fecha_nacimiento,
            p.correo,
            p.telefono,
            p.direccion,
            p.activo,
            c.nombre AS cliente
        FROM personas p
        INNER JOIN clientes c ON p.codCliente = c.id
        WHERE p.cedula ILIKE '%' || $1 || '%'`,

    FIND_BY_NAME: `SELECT p.id,
            p.cedula,
            p.nombre,
            p.apellido,
            p.fecha_nacimiento,
            p.correo,
            p.telefono,
            p.direccion,
            p.activo,
            c.nombre AS cliente
        FROM personas p
        INNER JOIN clientes c ON p.codCliente = c.id
        WHERE p.nombre = $1`,

    FIND_BY_NAME_LIKE: `SELECT p.id,
            p.cedula,
            p.nombre,
            p.apellido,
            p.fecha_nacimiento,
            p.correo,
            p.telefono,
            p.direccion,
            p.activo,
            c.nombre AS cliente
        FROM personas p
        INNER JOIN clientes c ON p.codCliente = c.id
        WHERE p.nombre ILIKE '%' || $1 || '%'`,

    FIND_NAME_CLIENTE: `SELECT id,
            nombre
        FROM clientes
        WHERE nombre = $1`,

    HOW_MANY: `SELECT count(p.cedula) as cantidad
        FROM personas p
        WHERE p.cedula = $1`,

    HOW_MANY_ID: `SELECT count(id) as cantidad
        FROM personas
        WHERE id = $1`,

    HOW_MANY_EMAIL: `SELECT count(correo) as cantidad
        FROM personas
        WHERE correo = $1`,

    HOW_MANY_PERSONASROL: `SELECT count(codPersona) as cantidad
        FROM personasRoles
        WHERE codPersona = $1`,

    HOW_MANY_PERSONASVINS: `SELECT count(codPersona) as cantidad
        FROM vinculaciones
        WHERE codPersona = $1`,

    HOW_MANY_PERSONASHISCAM: `SELECT count(codPersona) as cantidad
        FROM historialCambios
        WHERE codPersona = $1`,

    HOW_MANY_PERSONASNOT: `SELECT count(codPersona) as cantidad
        FROM notificaciones
        WHERE codPersona = $1`,

    HOW_MANY_PERSONASLOGIN: `SELECT count(codPersona) as cantidad
        FROM login
        WHERE codPersona = $1`,

    ADD: `INSERT INTO personas (
            cedula,
            nombre,
            apellido,
            fecha_nacimiento,
            correo,
            telefono,
            direccion,
            activo,
            codCliente)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING id, nombre`,

    UPDATE: `UPDATE personas
        SET cedula = $1,
            nombre = $2,
            apellido = $3,
            fecha_nacimiento = $4,
            correo = $5,
            telefono = $6,
            direccion = $7,
            activo = $8,
            codCliente = $9
        WHERE id = $10
        RETURNING id, nombre`,

    DELETE: `DELETE FROM personas
        WHERE id = $1`
};
