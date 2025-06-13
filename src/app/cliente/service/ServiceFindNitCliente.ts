import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_CLIENTE } from "../repository/sql_clientes";

class ServiceFindNitCliente {
    protected static async findNit(nit_cc: string, res: Response): Promise<any>{
        await pool
            .result(SQL_CLIENTE.FIND_NIT, [nit_cc])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindNitCliente;