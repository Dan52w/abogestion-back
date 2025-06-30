import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_TIPODOCUMENTO } from "../repository/sql_tipodocumentos";

class ServiceDeleteTipoDocumento {
    protected static async deleteTipoDocumento(id: number, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const validarTabla = await consulta.one(SQL_TIPODOCUMENTO.HOW_MANY_DOCUMENTO, [id]);
            
                if(validarTabla.cantidad != 0){
                    return caso;
                }
            
                obj = await consulta.result(SQL_TIPODOCUMENTO.DELETE, [id]); 
            
                if(obj.rowCount == 0){
                    caso = 2;
                } else {
                    caso = 3;
                }
            
                return caso;
            })
            .then((caso) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({respuesta: "No se puede borrar el Tipo Documento, esta referido en otra Tabla"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "No se encontro el Tipo Documento"});
                        break;
                    default:
                        res.status(200).json({respuesta: "Se elimino correctamente"});
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceDeleteTipoDocumento;