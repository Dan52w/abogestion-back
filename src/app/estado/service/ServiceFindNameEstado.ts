import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_ESTADO } from "../repository/sql_estados";

class ServiceFindNameEstado {
    protected static async findName(name: string, res: Response): Promise<any>{
        await pool
            .result(SQL_ESTADO.FIND_NAME, [name])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindNameEstado;