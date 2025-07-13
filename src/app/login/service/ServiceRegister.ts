import { Response } from "express";
import bcrypt from "bcryptjs";
import Persona from "../../persona/model/Persona";
import Login from "../model/Login";
import pool from "../../../config/connection/dbConnction";
import { SQL_PERSONA } from "../../persona/repository/sql_personas";
import { SQL_REGISTER } from "../repository/sql_register";

class ServiceRegister {
    protected static async register(objP: Persona, nameCliente: string, password: string, res: Response): Promise<any> {
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;

                const existePersona = await consulta.one(SQL_PERSONA.HOW_MANY, [objP.cedula]);
                if (existePersona.cantidad != 0) {
                    return { caso, obj};
                }

                const existeCorreo = await consulta.one(SQL_PERSONA.HOW_MANY_EMAIL, [objP.correo]);
                if (existeCorreo.cantidad != 0) {
                    caso = 2;
                    return { caso, obj};
                }

                const idCliente = await consulta.oneOrNone(SQL_PERSONA.FIND_NAME_CLIENTE, [nameCliente]);
                if (!idCliente) {
                    caso = 3
                    return { caso, obj};
                }

                const cifrarPassword = await bcrypt.hash(password, 10);
                const idPersona = await consulta.one(SQL_PERSONA.ADD, [objP.cedula, objP.nombre, objP.apellido, objP.codRol,
                        objP.fecha_nacimiento, objP.correo, objP.telefono, objP.direccion, objP.activo, idCliente.id]);

                obj = await consulta.one(SQL_REGISTER.REGISTER_LOGIN, [idPersona.id, cifrarPassword]);
                caso = 4
                return { caso, obj };
            })
            .then(({ caso, obj }) => {
                switch (caso) {
                    case 1:
                        res.status(409).json({ respuesta: "La cédula ya está registrada" });
                        break;
                    case 2:
                        res.status(409).json({ respuesta: "El correo ya está registrado" });
                        break;
                    case 3:
                        res.status(404).json({ respuesta: "Cliente no encontrado" });
                        break;
                    case 4:
                        res.status(201).json({ respuesta: "Registro exitoso", obj });
                        break;
                    default:
                        res.status(500).json({ respuesta: "Error inesperado en el registro" });
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(500).json({ respuesta: "Error en el SQL", detalle: error.message });
            });
    }
}

export default ServiceRegister;