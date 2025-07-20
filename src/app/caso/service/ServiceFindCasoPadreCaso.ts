import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_CASOS } from "../repository/sql_casos";

class ServiceFindCasoPadreCaso {
    protected static async findCasoPadre(casoPadre: number, res: Response): Promise<void> {
        await pool
            .result(SQL_CASOS.FIND_BY_CASOPADRE, [casoPadre])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.log(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            });
    }
}

export default ServiceFindCasoPadreCaso;