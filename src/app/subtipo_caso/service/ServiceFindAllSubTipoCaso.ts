import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_SUBTIPOCASO } from "../repository/sql_subtipocasos";

class ServiceFindAllSubTipoCaso {
    protected static async findAll(res: Response): Promise<any> {
        await pool
            .result(SQL_SUBTIPOCASO.FIND_ALL)
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindAllSubTipoCaso;