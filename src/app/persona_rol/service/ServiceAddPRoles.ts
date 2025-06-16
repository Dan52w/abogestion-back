import { Response } from "express";
import PersonaRol from "../model/PersonaRol";
import pool from "../../../config/connection/dbConnction";
import { SQL_PERSONAS_ROLES } from "../repository/sql_personasroles";

class ServiceAddPRoles{
    protected static async addPRoles(objPersonaRol: PersonaRol, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existe = await consulta.one(SQL_PERSONAS_ROLES.HOW_MANY, [objPersonaRol.codRol,
                    objPersonaRol.codPersona]);
            
                if(existe.cantidad != 0) {
                    return {caso, obj};
                }
            
                const existeRol = await consulta.one(SQL_PERSONAS_ROLES.HOW_MANY_ROL, [objPersonaRol.codRol]);
            
                if(existeRol.cantidad == 0) {
                    caso = 2;
                    return {caso, obj};
                }
            
                const existePersona = await consulta.one(SQL_PERSONAS_ROLES.HOW_MANY_PERSONA, [objPersonaRol.codPersona]);
            
                if(existePersona.cantidad == 0) {
                    caso = 3;
                    return {caso, obj};
                }
            
                obj = await consulta.one(SQL_PERSONAS_ROLES.ADD, [objPersonaRol.codRol, objPersonaRol.codPersona]);
                caso = 4;
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({respuesta: "Ya existe la relacion entre la Perosna y el Rol"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "No se encontro el Rol"});
                        break;
                    case 3:
                        res.status(404).json({respuesta: "No se encontro la Persona"});
                        break;
                    default:
                        res.status(200).json(obj);
                }
            })
            .catch((error) => {
                console.log(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceAddPRoles;