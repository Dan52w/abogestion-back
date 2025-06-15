import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_PERSONA } from "../repository/sql_personas";

class ServiceDeletePersona {
    protected static async deletePersona(id: number, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
            
                const existe = await consulta.one(SQL_PERSONA.HOW_MANY_ID, [id]);
            
                if(existe.cantidad == 0) {
                    return caso;
                }
            
                const codPersonaRol = await consulta.one(SQL_PERSONA.HOW_MANY_PERSONASROL, [id]);
                const codPeronsaVin = await consulta.one(SQL_PERSONA.HOW_MANY_PERSONASVINS, [id]);
                const codPersonaHisCam = await consulta.one(SQL_PERSONA.HOW_MANY_PERSONASHISCAM, [id]);
                const codPersonaNot = await consulta.one(SQL_PERSONA.HOW_MANY_PERSONASNOT, [id]);
                const codPersonaLogin = await consulta.one(SQL_PERSONA.HOW_MANY_PERSONASLOGIN, [id]);
            
                if(codPersonaHisCam == 0 || codPeronsaVin == 0 || codPersonaRol == 0 || codPersonaNot == 0 || codPersonaLogin == 0) {
                    caso = 2;
                    await consulta.result(SQL_PERSONA.DELETE, [id]);
                } else {
                    caso = 3;
                }
            
                return caso;
            })
            .then((caso) => {
                switch(caso) {
                    case 1:
                        res.status(404).json({respuesta: "No se encontro la Persona"});
                        break;
                    case 2:
                        res.status(200).json({respuesta: "Persona Eliminada Correctamente"});
                        break;
                    case 3:
                        res.status(400).json({respuesta: "No se puede eliminar esta persona, porque esta referenciada en otras tablas"});
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceDeletePersona;