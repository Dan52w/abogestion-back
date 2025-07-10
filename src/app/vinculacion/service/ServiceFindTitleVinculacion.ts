import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_VINCULACION } from "../repository/sql_vinculaciones";

class ServiceFindTitleVinculacion {
    protected static async findTitle(title: string, codClienteConsultant: number, res: Response): Promise<any>{
        await pool
            .result(SQL_VINCULACION.FIND_TITLE_LIKE, [codClienteConsultant, title])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"})
            })
    }
}

export default ServiceFindTitleVinculacion;