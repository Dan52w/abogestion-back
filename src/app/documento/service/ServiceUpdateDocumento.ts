import { Response } from "express";
import Documento from "../model/Documento";
import pool from "../../../config/connection/dbConnction";
import { SQL_DOCUMENTOS } from "../repository/sql_documentos";

class ServiceUpdateDocumento {
    protected static async updateDocumento(objDocumento: Documento, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existeTDocumento = await consulta.one(SQL_DOCUMENTOS.HOW_MANE_TIPODOCUMENTO, [objDocumento.tipoDocumento]);
            
                if(existeTDocumento.cantidad == 0) {
                    return {caso, obj};
                }
            
                const existeCaso = await consulta.one(SQL_DOCUMENTOS.HOW_MANY_CASO, [objDocumento.codCaso]);
            
                if(existeCaso == 0){
                    caso = 2;
                    return {caso, obj};
                }
            
                if(objDocumento.codCaso != 1) {
                    obj = await consulta.one(SQL_DOCUMENTOS.UPDATE, [objDocumento.codCaso, objDocumento.tipoDocumento,
                        objDocumento.nombre, objDocumento.id]);
                    caso = 4;
                } else {
                    caso = 3;
                }
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(404).json({respuesta: "No Se encontro el tipo Documento"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "No se encontro el Caso"});
                        break;
                    case 3:
                        res.status(400).json({respuesta: "No se pueden vincular Doc a ese caso"});
                    default:
                        res.status(200).json(obj);
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceUpdateDocumento;