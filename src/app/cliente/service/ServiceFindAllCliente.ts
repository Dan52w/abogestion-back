import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_CLIENTE } from "../repository/sql_clientes";

class ServiceFindAllCliente {
    protected static async findAllCliente(res: Response): Promise<any>{
        await pool
            .result(SQL_CLIENTE.FIND_ALL)
            .then((misDataos) => {
                return res.status(200).json(misDataos.rows)
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindAllCliente;