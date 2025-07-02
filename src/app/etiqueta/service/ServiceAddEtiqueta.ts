import { Response } from "express";
import Etiqueta from "../model/Etiqueta";
import pool from "../../../config/connection/dbConnction";
import { SQL_ETIQUETA } from "../repository/sql_etiquetas";

class ServiceAddEtiqueta {
    protected static async addEtiqueta(nameEtiqueta: string, nameTEtiqueta: string, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const idTEtiqueta = await consulta.oneOrNone(SQL_ETIQUETA.FIND_TIPO_ETIQUETA_NOMBRE, [nameTEtiqueta]);
            
                if(!idTEtiqueta) {
                    return {caso, obj};
                }
            
                const existe = await consulta.one(SQL_ETIQUETA.HOW_MANY, [nameEtiqueta, idTEtiqueta.id]);
            
                if(existe.cantidad != 0){
                    caso = 2;
                    return {caso, obj};
                }
            
                obj = await consulta.one(SQL_ETIQUETA.ADD, [nameEtiqueta, idTEtiqueta.id]);
                caso = 3;
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(404).json({respuesta: "No se encontro el Tipo de Etiqueta"});
                        break;
                    case 2:
                        res.status(400).json({respuesta: "Ya existe una Etiqueta con ese nombre asignada al tipo Etiqueta"});
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

export default ServiceAddEtiqueta;