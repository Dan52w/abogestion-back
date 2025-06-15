import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_PERSONA } from "../repository/sql_personas";

class ServiceFindBtwDatePersona {
    protected static async findBtwDate(oneFecha: string, twoFecha: string, res: Response): Promise<any>{
        await pool
            .result(SQL_PERSONA.FIND_BY_FECHANACIMIENTO_BETWEEN, [oneFecha, twoFecha])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindBtwDatePersona;