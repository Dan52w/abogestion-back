import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_TIPOSCASOS } from "../repository/sql_tiposcasos";

class ServiceAddTipoCaso {
    protected static async addTipoCaso(name: string, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existe = await consulta.one(SQL_TIPOSCASOS.HOW_MANY, [name]);
            
                if(existe.cantidad == 0) {
                    caso = 2;
                    obj = await consulta.one(SQL_TIPOSCASOS.ADD, [name]);
                }
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso){
                    case 1:
                        res.status(400).json({respuesta: "Ya existe el tipo Caso"});
                        break;
                    default:
                        res.status(200).json(obj)
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceAddTipoCaso;