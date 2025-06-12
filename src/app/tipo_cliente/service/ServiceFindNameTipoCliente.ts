import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_TIPOSCLIENTES } from "../repository/sql_tiposclientes";

class ServiceFindNameTipoCliente {
    protected static async findName(name: string, res: Response): Promise<any>{
        await pool
            .result(SQL_TIPOSCLIENTES.FIND_NAME, [name])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({repuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindNameTipoCliente;