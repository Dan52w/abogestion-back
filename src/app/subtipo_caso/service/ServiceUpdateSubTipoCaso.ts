import { Response } from "express";
import SubTipoCaso from "../model/SubTipoCaso";
import pool from "../../../config/connection/dbConnction";
import { SQL_SUBTIPOCASO } from "../repository/sql_subtipocasos";

class ServiceUpdateSubTipoCaso {
    protected static async updateSubtipoCaso(objSubTCaso: SubTipoCaso, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const tipoCaso = await consulta.oneOrNone(SQL_SUBTIPOCASO.FIND_TIPO_CASO_ID, [objSubTCaso.codTipoCaso]);
            
                if(!tipoCaso) {
                    return {caso, obj};
                }
            
                const existe = await consulta.oneOrNone(SQL_SUBTIPOCASO.FIND_ID, [objSubTCaso.id]);
            
                if(existe) {
                    obj = await consulta.one(SQL_SUBTIPOCASO.UPDATE, [objSubTCaso.nombre, objSubTCaso.codTipoCaso, objSubTCaso.id]);
                    caso = 3;
                } else {
                    caso = 2;
                }
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch(caso) {
                    case 1:
                        res.status(404).json({respuesta: "No se encontro o no existe el Tipo de Caso"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "No se encontro o no existe el Sub Tipo de Caso que se desea actualizar"});
                        break;
                    default:
                        res.status(200).json(obj);
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
                res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceUpdateSubTipoCaso;