import { Response } from "express";
import Persona from "../model/Persona";
import pool from "../../../config/connection/dbConnction";
import { SQL_PERSONA } from "../repository/sql_personas";

class ServiceAddPersona {
    protected static async addPersona(objPersona: Persona, nameCliente: string, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existeCc = await consulta.one(SQL_PERSONA.HOW_MANY, [objPersona.cedula]);
            
                if(existeCc.cantidad != 0) {
                    return {caso, obj};
                }
            
                const existeEmail = await consulta.one(SQL_PERSONA.HOW_MANY_EMAIL, [objPersona.correo]);
            
                if(existeEmail.cantidad != 0) {
                    caso = 2;
                    return {caso, obj};
                }
            
                const idCliente = await consulta.oneOrNone(SQL_PERSONA.FIND_NAME_CLIENTE, [nameCliente]);
            
                if(!idCliente) {
                    caso = 3;
                    return {caso, obj};
                }
            
                obj = await consulta.one(SQL_PERSONA.ADD, [objPersona.cedula, objPersona.nombre, objPersona.apellido, 
                    objPersona.codRol, objPersona.fecha_nacimiento, objPersona.correo, objPersona.telefono, 
                    objPersona.direccion, objPersona.activo, idCliente.id]);
                caso = 4;
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({respuesta: "La existe una Persona registrada con esa Cedula"});
                        break;
                    case 2:
                        res.status(400).json({respuesta: "El Correo ya existe"});
                        break;
                    case 3:
                        res.status(404).json({respuesta: "No se encontro el Cliente"});
                        break;
                    default:
                        res.status(200).json(obj);
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceAddPersona;