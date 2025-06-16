import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_PERSONAS_ROLES } from "../repository/sql_personasroles";

class ServiceFindPersonaPRoles {
    protected static async findPersona(idPersona: number, res: Response): Promise<any>{
        await pool
            .result(SQL_PERSONAS_ROLES.FIND_BY_PERSONA, [idPersona])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindPersonaPRoles;