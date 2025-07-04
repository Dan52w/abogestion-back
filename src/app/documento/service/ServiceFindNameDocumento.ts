import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_DOCUMENTOS } from "../repository/sql_documentos";

class ServiceFindNameDocumento {
    protected static async findName(name: string, res: Response): Promise<any>{
        await pool
            .result(SQL_DOCUMENTOS.FIND_NAME_LIKE, [name])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindNameDocumento;