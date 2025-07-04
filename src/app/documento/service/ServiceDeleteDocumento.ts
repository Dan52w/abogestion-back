import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_DOCUMENTOS } from "../repository/sql_documentos";

class ServiceDeleteDocumento {
    protected static async deleteDocumento(id: number, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const validarTabla = await consulta.one(SQL_DOCUMENTOS.HOW_MANY_DOCETIQUE, [id]);
            
                if(validarTabla.cantidad != 0) {
                    return caso;
                }
            
                obj = await consulta.result(SQL_DOCUMENTOS.DELETE, [id]);
                caso = 2;
            
                return caso;
            })
            .then((caso) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({respuesta: "No se puede borrar el Documento, esta referenciado en otra tabla"});
                        break;
                    default:
                        res.status(200).json({respuesta: "Eliminado correctamente"});
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceDeleteDocumento;