import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_CASOS } from "../repository/sql_casos";

class ServiceFindFiltersCaso {
    protected static async findFilter(firma: number, titulo: string | null, estado: string | null, subtipo: string | null,
        fechaInicio: string | null, fechaFin: string | null, res: Response): Promise<any>{
        await pool
            .result(SQL_CASOS.FIND_BY_FILTERS, [firma, titulo || null, estado || null, subtipo || null,
                fechaInicio || null, fechaFin || null])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindFiltersCaso;