import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_ETIQUETA } from "../repository/sql_etiquetas";

class ServiceFindAllEtiqueta {
    protected static async findAll(res: Response): Promise<any>{
        await pool
            .result(SQL_ETIQUETA.FIND_ALL)
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindAllEtiqueta;