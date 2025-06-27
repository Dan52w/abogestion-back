import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_CASOS } from "../repository/sql_casos";

class ServiceFindTituloCaso {
    protected static async findTitulo(titulo: string, res: Response): Promise<any>{
        await pool
            .result(SQL_CASOS.FIND_BY_TITLE_LIKE, [titulo])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindTituloCaso;