import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_TIPOSCASOS } from "../repository/sql_tiposcasos";

class ServiceFindNameTipoCaso {
    protected static async findName(name: string, res: Response): Promise<any>{
        await pool
            .result(SQL_TIPOSCASOS.FIND_NAME, [name])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindNameTipoCaso;