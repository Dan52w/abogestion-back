export const SQL_LOGIN = {
    VERY_LOGIN : `SELECT p.correo,
            l.password
        FROM logins l
        INNER JOIN personas p ON l.codPersona = p.id
        WHERE p.correo = $1`,

    LOGIN : `SELECT p.nombre,
            p.id,
            p.apellido,
            r.nombre AS rol
        FROM logins l
        INNER JOIN personas p ON l.codPersona = p.id
        INNER JOIN roles r ON p.codRol = r.id
        WHERE p.correo = $1
        GROUP BY p.id, p.nombre, p.apellido, r.id, r.nombre, l.password;`,
}