import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_ROL } from "../repository/sql_roles";

class ServiceUpdateRol{
    protected static async updateRol(oldName: string, newName: string, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 3;
                let obj: any;
            
                const exiteNewName = await consulta.one(SQL_ROL.HOW_MANY, [newName]);
            
                if(exiteNewName.cantidad != 0) {
                    caso = 1;
                    return {caso, obj};
                }
            
                const oldRol = await consulta.oneOrNone(SQL_ROL.FIND_NAME, [oldName]);
            
                if(!oldRol) {
                    caso = 2;
                    return {caso, obj};
                }
            
                obj = await consulta.one(SQL_ROL.UPDATE, [newName, oldRol.id]);
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({respuesta: "Ya existe un rol con ese nombre"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "No se encontro el rol que desea actualizar"});
                        break;
                    default:
                        res.status(200).json(obj);
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceUpdateRol;