import { Response } from "express";
import Vinculacion from "../model/Vinculacion";
import pool from "../../../config/connection/dbConnction";
import { SQL_VINCULACION } from "../repository/sql_vinculaciones";

class ServiceDeleteVinculacion {
    protected static async deleteVinculaciones(objVinculacion: Vinculacion, res: Response): Promise<any>{
        await pool
            .result(SQL_VINCULACION.DELETE, [objVinculacion.codPersona, objVinculacion.codCaso, objVinculacion.codTipoVinculacion])
            .then((misDatos) => {
                if(misDatos.rowCount == 0){
                    return res.status(404).json({respuesta: "No se encontro la vinculacion"});
                } else {
                    return res.status(200).json({respuesa: "Eliminado Correctamente"});
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceDeleteVinculacion;