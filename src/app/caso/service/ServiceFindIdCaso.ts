import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_CASOS } from "../repository/sql_casos";

class ServiceFindIdCaso {
    protected static async findId(id: number, res: Response): Promise<any>{
        await pool
            .result(SQL_CASOS.FIND_ID, [id])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindIdCaso;