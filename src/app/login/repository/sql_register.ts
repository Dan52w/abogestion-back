export const SQL_REGISTER = {
    REGISTER_LOGIN: `
        INSERT INTO logins (
            codPersona,
            password
        ) VALUES ($1, $2)
        RETURNING codPersona
        `,
}