import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_ROL } from "../repository/sql_roles";

class ServiceFindNameRol {
    protected static async findName(name: string, res: Response): Promise<any> {
        await pool
            .result(SQL_ROL.FIND_NAME, [name])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindNameRol;