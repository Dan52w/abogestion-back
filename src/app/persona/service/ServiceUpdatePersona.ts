import { Response } from "express";
import Persona from "../model/Persona";
import pool from "../../../config/connection/dbConnction";
import { SQL_PERSONA } from "../repository/sql_personas";

class ServiceUpdatePersona {
    protected static async updatePersona(objPersona: Persona, nameCliente: string, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const idPersona = await consulta.oneOrNone(SQL_PERSONA.FIND_CEDULA, [objPersona.cedula]);
            
                if(!idPersona) {
                    return {caso, obj};
                }
            
                const idCliente = await consulta.oneOrNone(SQL_PERSONA.FIND_NAME_CLIENTE, [nameCliente]);
            
                if(!idCliente) {
                    caso = 2;
                    return {caso, obj};
                }
            
                obj = await consulta.one(SQL_PERSONA.UPDATE, [objPersona.cedula, objPersona.nombre, 
                    objPersona.apellido, objPersona.fecha_nacimiento, objPersona.correo, objPersona.telefono, 
                    objPersona.direccion, objPersona.activo, idCliente.id, objPersona.codRol, idPersona.id]);
                caso = 3;
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(404).json({respuesta: "No se encontro a la persona"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "No se encontro al cliente"});
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

export default ServiceUpdatePersona;