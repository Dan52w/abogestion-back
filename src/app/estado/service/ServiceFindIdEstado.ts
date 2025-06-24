import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_ESTADO } from "../repository/sql_estados";

class ServiceFindIdEstado {
    protected static async findId(id: number, res: Response): Promise<any>{
        await pool
            .result(SQL_ESTADO.FIND_ID, [id])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindIdEstado;