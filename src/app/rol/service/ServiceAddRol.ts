import { response, Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_ROL } from "../repository/sql_roles";

class ServiceAddRol {
    protected static async add(name: string, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existe = await consulta.one(SQL_ROL.HOW_MANY, [name]);
            
                if(existe.cantidad == 0) {
                    caso = 2;
                    obj = await consulta.one(SQL_ROL.ADD, [name]);
                }
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({repuesta: "Ya existe ese rol"});
                        break;
                    default:
                        res.status(200).json({obj})
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({repuesta: "Error en el SQL"})
            })
    }
}

export default ServiceAddRol;