import { Response } from "express";
import Caso from "../model/Caso";
import pool from "../../../config/connection/dbConnction";
import { SQL_CASOS } from "../repository/sql_casos";

class ServiceAddCaso {
    protected static async AddCaso(objCaso: Caso, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let obj: any;
            
                if(!objCaso.codCasoPadre){
                    obj = await consulta.one(SQL_CASOS.ADD, [objCaso.titulo, objCaso.descripcion, objCaso.estado, 
                    objCaso.fechaInicio, objCaso.codSubtipoCaso, 1]);
                } else {
                    obj = await consulta.one(SQL_CASOS.ADD, [objCaso.titulo, objCaso.descripcion, objCaso.estado, 
                    objCaso.fechaInicio, objCaso.codSubtipoCaso, objCaso.codCasoPadre]);
                }
            
                return obj;
            })
            .then((obj) => {
                return res.status(200).json(obj);
            })
            .catch((error) => {
                console.log(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceAddCaso;