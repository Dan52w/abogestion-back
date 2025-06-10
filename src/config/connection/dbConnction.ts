import dotenv from 'dotenv';
import pgPromise from 'pg-promise';
import { optionsPG } from './optionsPG';

dotenv.config({ path: '.env' });

const portDB = Number(process.env.PORT);
const dataBase = String(process.env.DATABASE);
const hostDB = String(process.env.HOST);
const userDB = String(process.env.USER_DB);
const passwordDB = String(process.env.USER_PASSWORD);

const pgp = pgPromise(optionsPG);
const pool = pgp({
    host: hostDB,
    port: portDB,
    database: dataBase,
    user: userDB,
    password: passwordDB,
});

// Evita conexión real durante tests
if (process.env.NODE_ENV !== 'test') {
    pool
        .connect()
        .then((miConn) => {
            console.log('Conexión exitosa a la base de datos');
            miConn.done();
        })
        .catch((miError) => {
            console.log(miError);
        });
}

export default pool;