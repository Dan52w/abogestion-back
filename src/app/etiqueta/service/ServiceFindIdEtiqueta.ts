import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_ETIQUETA } from "../repository/sql_etiquetas";

class ServiceFindIdEtiqueta {
    protected static async findId(id: number, res: Response): Promise<any>{
        await pool
            .result(SQL_ETIQUETA.FIND_ID, [id])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindIdEtiqueta;