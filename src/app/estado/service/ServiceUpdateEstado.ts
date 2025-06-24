import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_ESTADO } from "../repository/sql_estados";

class ServiceUpdateEstado {
    protected static async updateEstado(oldName: string, newName: string, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existeNewName = await consulta.one(SQL_ESTADO.HOW_MANY, [newName]);
            
                if(existeNewName.cantidad != 0) {
                    return {caso, obj};
                }
            
                const idOldEstado = await consulta.oneOrNone(SQL_ESTADO.FIND_NAME, [oldName]);
            
                if(!idOldEstado) {
                    caso = 2;
                    return {caso, obj};
                }
            
                obj = await consulta.one(SQL_ESTADO.UPDATE, [newName, idOldEstado.id]);
                caso = 3;
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch(caso) {
                    case 1:
                        return res.status(400).json({respuesta: "El nuevo nombre ya existe"});
                    case 2:
                        return res.status(404).json({respuesta: "El estado a actualizar no existe"});
                    default:
                        return res.status(200).json(obj);
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceUpdateEstado;