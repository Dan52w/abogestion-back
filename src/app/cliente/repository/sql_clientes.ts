export const SQL_CLIENTE = {
    FIND_ALL: `SELECT c.id,
            c.nombre,
            c.nit_cc,
            c.direccion,
            c.telefono,
            c.correoContacto,
            c.activo,
            tc.nombre AS tipoCliente
        FROM clientes c
        INNER JOIN tiposClientes tc ON c.tipoCliente = tc.id`,

    FIND_ID: `SELECT c.id,
            c.nombre,
            c.nit_cc,
            c.direccion,
            c.telefono,
            c.correoContacto,
            c.activo,
            tc.nombre AS tipoCliente
        FROM clientes c
        INNER JOIN tiposClientes tc ON c.tipoCliente = tc.id
        WHERE c.id = $1`,

    FIND_NIT: `SELECT c.id,
            c.nombre,
            c.nit_cc,
            c.direccion,
            c.telefono,
            c.correoContacto,
            c.activo,
            tc.nombre AS tipoCliente
        FROM clientes c
        INNER JOIN tiposClientes tc ON c.tipoCliente = tc.id
        WHERE c.nit_cc = $1`,

    FIND_BY_NAME: `SELECT c.id,
            c.nombre,
            c.nit_cc,
            c.direccion,
            c.telefono,
            c.correoContacto,
            c.activo,
            tc.nombre AS tipoCliente
        FROM clientes c
        INNER JOIN tiposClientes tc ON c.tipoCliente = tc.id
        WHERE c.nombre = $1`,

    FIND_BY_NAME_LIKE: `SELECT c.id,
            c.nombre,
            c.nit_cc,
            c.direccion,
            c.telefono,
            c.correoContacto,
            c.activo,
            tc.nombre AS tipoCliente
        FROM clientes c
        INNER JOIN tiposClientes tc ON c.tipoCliente = tc.id
        WHERE c.nombre ILIKE '%' || $1 || '%'`,

    HOW_MANY: `SELECT count(c.nit_cc) as cantidad
        FROM clientes c
        WHERE c.nit_cc = $1`,

    ADD: `INSERT INTO clientes (
            tipoCliente,
            nombre,
            nit_cc,
            direccion,
            telefono,
            correoContacto,
            activo)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id, nombre`,

    UPDATE: `UPDATE clientes
        SET tipoCliente = $1,
            nombre = $2,
            nit_cc = $3,
            direccion = $4,
            telefono = $5,
            correoContacto = $6,
            activo = $7
        WHERE id = $8
        RETURNING id, nombre`,

    DELETE: `DELETE FROM clientes
        WHERE id = $1`
};
