import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_PERSONAS_ROLES } from "../repository/sql_personasroles";

class ServiceFindAllPRoles {
    protected static async findAll(res: Response): Promise<any>{
        await pool
            .result(SQL_PERSONAS_ROLES.FIND_ALL)
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindAllPRoles;