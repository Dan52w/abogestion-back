import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_ROL } from "../repository/sql_roles";

class ServiceFindIdRol {
    protected static async findId(id: number, res: Response): Promise<any> {
        await pool
            .result(SQL_ROL.FIND_ID, [id])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({repuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindIdRol;