import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_DOCUMENTO_ETIQUETA } from "../repository/sql_documentoetiquetas";

class ServiceDeleteCodDDocEti {
    protected static async deleteCodDocEti(codDocumento: number, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                const obj = await consulta.result(SQL_DOCUMENTO_ETIQUETA.DELETE_CODDOC, [codDocumento]);
            
                if(obj.rowCount != 0) caso = 2;
            
                return caso;
            })
            .then((caso) => {
                switch (caso) {
                    case 1:
                        res.status(404).json({respuesta: "No se encontro Ninguna Relacion con este Documento"});
                        break;
                    default:
                        res.status(200).json({respuesta: "Eliminado Correctamente"});
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceDeleteCodDDocEti;