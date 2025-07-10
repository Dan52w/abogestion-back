import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_VINCULACION } from "../repository/sql_vinculaciones";

class ServiceFindSubTVinculacion {
    protected static async findSubT(subtipo: string, codClienteConsultant: number, res: Response): Promise<any>{
        await pool
            .result(SQL_VINCULACION.FIND_SUPTIPO, [codClienteConsultant, subtipo])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindSubTVinculacion;