import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_SUBTIPOCASO } from "../repository/sql_subtipocasos";

class ServiceFindTypeNameSubTipoCaso {
    protected static async findTypeName(name: string, res: Response): Promise<any>{
        await pool
            .result(SQL_SUBTIPOCASO.FIND_BY_TIPO_NOMBRE, [name])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindTypeNameSubTipoCaso;