import { Response } from "express";
import DocumentoEtiqueta from "../model/DocumentoEtiqueta";
import pool from "../../../config/connection/dbConnction";
import { SQL_DOCUMENTO_ETIQUETA } from "../repository/sql_documentoetiquetas";

class ServiceAddDocEti {
    protected static async addDocEti(objDocEti: DocumentoEtiqueta, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existeCodDoc = await consulta.one(SQL_DOCUMENTO_ETIQUETA.HOW_MANY_DOC, [objDocEti.codDocumento]);
            
                if(existeCodDoc.cantidad == 0) {
                    return {caso, obj};
                }
            
                const existeCodEti = await consulta.one(SQL_DOCUMENTO_ETIQUETA.HOW_MANY_ETI, [objDocEti.codEtiqueta]);
            
                if(existeCodEti.cantidad == 0) {
                    caso = 2;
                    return {caso, obj};
                }
            
                const existe = await consulta.one(SQL_DOCUMENTO_ETIQUETA.HOW_MANY, [objDocEti.codDocumento, objDocEti.codEtiqueta]);
            
                if(existe.cantidad == 0){
                    caso = 4;
                    obj = await consulta.result(SQL_DOCUMENTO_ETIQUETA.ADD, [objDocEti.codDocumento, objDocEti.codEtiqueta]);
                } else {
                    caso = 3;
                }
            
                return {caso, obj}
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(404).json({respuesta: "No se encontro el Documento"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "No se encontro la Etiqueta"});
                        break;
                    case 3:
                        res.status(200).json({respuesta: "Ya existe la relacion"});
                        break;
                    default:
                        res.status(200).json({respuesta: "Se añadio la etiqueta de manera exitosa"});
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceAddDocEti;