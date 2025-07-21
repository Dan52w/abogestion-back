import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_VINCULACION } from "../repository/sql_vinculaciones";

class ServiceManyCasAsigVinculacion {
    protected static async manyCasAsig(codPersona: number, res: Response): Promise<any> {
        await pool
            .result(SQL_VINCULACION.HOW_MANY_CASOSASIGNADOS, [codPersona])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceManyCasAsigVinculacion;