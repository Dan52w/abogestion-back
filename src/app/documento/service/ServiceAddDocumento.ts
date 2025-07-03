import { Response } from "express";
import Documento from "../model/Documento";
import pool from "../../../config/connection/dbConnction";
import { SQL_DOCUMENTOS } from "../repository/sql_documentos";

class ServiceAddDocumento {
    protected static async addDocuemtno(objDocumento: Documento, res: Response): Promise<any>{
        await pool
            .task(async (consulta) =>{
                let caso = 1;
                let obj: any;
            
                const existeCaso = await consulta.one(SQL_DOCUMENTOS.HOW_MANY_CASO, [objDocumento.codCaso]);
            
                if(existeCaso.cantidad == 0) {
                    return {caso, obj};
                }
            
                const existeTipoDocumento = await consulta.one(SQL_DOCUMENTOS.HOW_MANE_TIPODOCUMENTO, [objDocumento.tipoDocumento]);
            
                if(existeTipoDocumento == 0) {
                    caso = 2;
                    return {caso, obj};
                }
            
                if(objDocumento.url == "Sin Definir"){
                    caso = 3;
                    return {caso, obj};
                }
            
                if(objDocumento.codCaso == 1) {
                    caso = 4;
                    return {caso, obj};
                }
            
                obj = await consulta.one(SQL_DOCUMENTOS.ADD, [objDocumento.codCaso, objDocumento.tipoDocumento, 
                    objDocumento.nombre, objDocumento.url, objDocumento.fechaSubida]);
                caso = 5;
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(404).json({respuesta: "No se encontro el Caso"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "No se encontro el Tipo Docuemnto"});
                        break;
                    case 3:
                        res.status(400).json({respuesta: "No se agrego documento"});
                        break;
                    case 4:
                        res.status(400).json({respuesta: "No se permiten documentos referenciados a ese caso"});
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

export default ServiceAddDocumento;