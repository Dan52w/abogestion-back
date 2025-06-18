import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_SUBTIPOCASO } from "../repository/sql_subtipocasos";

class ServiceAddSubTipoCaso {
    protected static async addSubTipoCaso(name: string, nameTipoCaso: string, res: Response): Promise<any> {
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existe = await consulta.one(SQL_SUBTIPOCASO.HOW_MANY, [name]);
            
                if(existe.cantidad != 0) {
                    return {caso, obj};
                }
            
                const existeTipoCaso = await consulta.oneOrNone(SQL_SUBTIPOCASO.FIND_TIPO_CASO_NOMBRE, [nameTipoCaso]);
            
                if(!existeTipoCaso) {
                    caso = 2;
                    return {caso, obj};
                }
            
                obj = await consulta.one(SQL_SUBTIPOCASO.ADD, [name, existeTipoCaso.id]);
                caso = 3;
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch(caso) {
                    case 1:
                        res.status(400).json({respuesta: "El subtipo de caso ya existe"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "No se encontró el tipo de caso"});
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

export default ServiceAddSubTipoCaso;