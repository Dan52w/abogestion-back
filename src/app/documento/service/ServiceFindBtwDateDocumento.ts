import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_DOCUMENTOS } from "../repository/sql_documentos";

class ServiceFindBtwDateDocumento {
    protected static async findBtwDate(desdeFecha: string, hastaFecha: string, res: Response): Promise<any>{
        await pool
            .result(SQL_DOCUMENTOS.FIND_BETWEEN_FECHAS, [desdeFecha, hastaFecha])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindBtwDateDocumento;