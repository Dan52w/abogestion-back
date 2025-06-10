import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_TIPOSCLIENTES } from "../repository/sql_tiposclientes";

class ServiceAddTipoCliente {
    protected static async addTipoCliente(name: string, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existe = await consulta.oneOrNone(SQL_TIPOSCLIENTES.HOW_MANY, [name]);
            
                if(existe.cantidad == 0) {
                    caso = 2;
                    obj = await consulta.one(SQL_TIPOSCLIENTES.ADD, [name]);
                }
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({respuesta: "Ya existe el Tipo Cliente"})
                        break;
                    default:
                        res.status(200).json({obj});
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"})
            })
    }
}

export default ServiceAddTipoCliente;