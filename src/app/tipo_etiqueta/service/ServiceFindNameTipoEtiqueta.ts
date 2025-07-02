import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_TIPOSETIQUETAS } from "../repository/sql_tiposetiquetas";

class ServiceFindNameTipoEtiqueta {
    protected static async findName(name: string, res: Response): Promise<any>{
        await pool
            .result(SQL_TIPOSETIQUETAS.FIND_NAME, [name])
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindNameTipoEtiqueta;