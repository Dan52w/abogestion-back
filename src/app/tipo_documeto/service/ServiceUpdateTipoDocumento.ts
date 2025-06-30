import { Response } from "express";
import TipoDocumento from "../model/TipoDocumento";
import pool from "../../../config/connection/dbConnction";
import { SQL_TIPODOCUMENTO } from "../repository/sql_tipodocumentos";

class ServiceUpdateTipoDocumento {
    protected static async updateTipoDocumento(objTipoDocumento: TipoDocumento, res: Response): Promise<any>{
        await pool
            .task(async (consulta) =>{
                let caso = 1;
                let obj: any;
            
                const existe = await consulta.oneOrNone(SQL_TIPODOCUMENTO.FIND_ID, [objTipoDocumento.id]);
            
                if(!existe){
                    return {caso, obj};
                }
            
                obj = await consulta.one(SQL_TIPODOCUMENTO.UPDATE, [objTipoDocumento.nombre, 
                    objTipoDocumento.descripcion, objTipoDocumento.id]);
                caso = 2;
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(404).json({respuesta: "No se encontro el Tipo Documento"});
                        break;
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

export default ServiceUpdateTipoDocumento;