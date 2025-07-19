import { Response } from "express";
import bcrypt from "bcryptjs";
import pool from "../../../config/connection/dbConnction";
import { SQL_LOGIN } from "../repository/sql_logins";
import { serialize } from "cookie";
import {InfoToken} from "../model/InfoToken";
import jwt from "jsonwebtoken";

class ServiceLogin {
    protected static async login(email: string, password: string, res: Response): Promise<any> {
        await pool
            .task(async (consulta) => {
                const verficar = await consulta.oneOrNone(SQL_LOGIN.VERY_LOGIN, [email]);
            
                if (!verficar) {
                    return { caso: 2 };
                }
            
                const veryPassword = await bcrypt.compare(password, verficar.password);
                if (!veryPassword) {
                    return { caso: 3 };
                }
            
                const login = await consulta.oneOrNone(SQL_LOGIN.LOGIN, [email]) as InfoToken;
                if (!login) {
                    return { caso: 3 };
                }
            
                const secret = process.env.JWT_SECRET;
                if (secret) {
                    const token = jwt.sign(login, secret, { expiresIn: "8h" });
                    const serialized = serialize("Authorization", token, {
                            httpOnly: true,
                            secure: true,
                            sameSite: "none",
                            maxAge: 8 * 60 * 60,
                            path: "/",
                    });
                    res.setHeader("Set-Cookie", serialized);
                } else {
                    throw new Error("La variable de entorno JWT_SECRET no está definida");
                }
            
                return { caso: 1, login };
            })
            .then(({ caso, login}) => {
                switch (caso) {
                    case 1:
                        res.status(200).json({ login });
                        break;
                    case 2:
                        res.status(401).json({ respuesta: "No se encontró el email" });
                        break;
                    case 3:
                        res.status(401).json({ respuesta: "Correo o contraseña incorrecta" });
                        break;
                    default:
                        res.status(500).json({ respuesta: "Error inesperado" });
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(500).json({ respuesta: "Error en el SQL" });
            });
    }
}


export default ServiceLogin;