import { Response } from "express";
import Caso from "../model/Caso";
import pool from "../../../config/connection/dbConnction";
import { SQL_CASOS } from "../repository/sql_casos";

class ServiceUpdateCaso {
    protected static async updateCaso(objCaso: Caso, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existe = await consulta.oneOrNone(SQL_CASOS.FIND_ID, [objCaso.id]);
            
                if(!existe) {
                    return {caso, obj};
                }
            
                if(!objCaso.codCasoPadre) {
                    obj = await consulta.one(SQL_CASOS.UPDATE, [objCaso.titulo, objCaso.descripcion, objCaso.estado, 
                    objCaso.fechaInicio, objCaso.codSubtipoCaso, 1, objCaso.id]);
                } else {
                    obj = await consulta.one(SQL_CASOS.UPDATE, [objCaso.titulo, objCaso.descripcion, objCaso.estado, 
                    objCaso.fechaInicio, objCaso.codSubtipoCaso, objCaso.codCasoPadre, objCaso.id]);
                }
            
                caso = 2;
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(404).json({respuesta: "No se encontro el caso"});
                        break;
                    case 2:
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

export default ServiceUpdateCaso;