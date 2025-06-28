import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_TIPODOCUMENTO } from "../repository/sql_tipodocumentos";

class ServiceFindAllTipoDocumento {
    protected static async findAll(res: Response): Promise<any>{
        await pool
            .result(SQL_TIPODOCUMENTO.FIND_ALL)
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindAllTipoDocumento;