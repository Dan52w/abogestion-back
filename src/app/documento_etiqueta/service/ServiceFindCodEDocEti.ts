import { json, Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_DOCUMENTO_ETIQUETA } from "../repository/sql_documentoetiquetas";

class ServiceFindCodEDocEti {
    protected static async findCodE(codEtiquetas: number[], res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                const cantidad = codEtiquetas.length;
            
                const obj = await consulta.result(SQL_DOCUMENTO_ETIQUETA.FIND_BY_ETIQUETAS_ALL, [codEtiquetas, cantidad]);
            
                return obj;
            })
            .then((misDatos) => {
                return res.status(200).json(misDatos.rows)
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceFindCodEDocEti;