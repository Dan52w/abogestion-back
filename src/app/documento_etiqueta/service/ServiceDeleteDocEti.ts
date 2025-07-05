import { Response } from "express";
import DocumentoEtiqueta from "../model/DocumentoEtiqueta";
import pool from "../../../config/connection/dbConnction";
import { SQL_DOCUMENTO_ETIQUETA } from "../repository/sql_documentoetiquetas";

class ServiceDeleteDocEti {
    protected static async deleteDocEti(objDocEti: DocumentoEtiqueta, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                const obj = await consulta.result(SQL_DOCUMENTO_ETIQUETA.DELETE, [objDocEti.codDocumento, objDocEti.codEtiqueta]);
            
                if (obj.rowCount != 0) caso = 2;
            
                return caso;
            })
            .then((caso) => {
                switch (caso) {
                    case 1:
                        res.status(404).json({respuesta: "No se encontro la relacion"});
                        break;
                    default:
                        res.status(200).json({respuesta: "Eliminado Correctamente"});
                }
            })
    }
}

export default ServiceDeleteDocEti;