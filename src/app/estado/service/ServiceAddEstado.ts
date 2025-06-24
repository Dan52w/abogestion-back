import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_ESTADO } from "../repository/sql_estados";

class ServiceAddEstado {
    protected static async addEstado(name: string, res: Response): Promise<any> {
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existe = await consulta.one(SQL_ESTADO.HOW_MANY, [name]);
            
                if(existe.cantidad == 0) {
                    obj = await consulta.one(SQL_ESTADO.ADD, [name]);
                    caso = 2;
                }
            
                return { caso, obj };
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({respuesta: "El estado ya existe"});
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

export default ServiceAddEstado;