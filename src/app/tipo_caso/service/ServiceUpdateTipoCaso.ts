import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_TIPOSCASOS } from "../repository/sql_tiposcasos";

class ServiceUpdateTipoCaso {
    protected static async updateTipoCaso(oldName: string, newName: string, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existeNewName = await consulta.one(SQL_TIPOSCASOS.HOW_MANY, [newName]);
            
                if(existeNewName.cantidad != 0) {
                    return {caso, obj}
                }
            
                const existeOldName = await consulta.oneOrNone(SQL_TIPOSCASOS.FIND_NAME, [oldName]);
            
                if(existeOldName) {
                    caso = 3;
                    obj = await consulta.one(SQL_TIPOSCASOS.UPDATE, [newName, existeOldName.id]);
                } else {
                    caso = 2;
                }
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({respuesta: "Ya existe un Tipo Caso con ese Nombre"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "No se encontro o no existe el Tipo caso que desea actualizar"});
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

export default ServiceUpdateTipoCaso;