import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_TIPOVINCULACION } from "../repository/sql_tipovinculaciones";

class ServiceUpdateTipoVinculacion {
    protected static async updateTipoVinculacion(oldName: string, newName: string, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            console.log("New ", newName, " - old ", oldName);
            
                const existeNewName = await consulta.one(SQL_TIPOVINCULACION.HOW_MANY, [newName]);
            
                if(existeNewName.cantidad != 0) {
                    return {caso, obj};
                }
            
                const oldId = await consulta.oneOrNone(SQL_TIPOVINCULACION.FIND_NAME, [oldName]);
            
                if(!oldId) {
                    caso = 2;
                    return {caso, obj};
                } 
            
                obj = await consulta.one(SQL_TIPOVINCULACION.UPDATE, [newName, oldId.id]);
                caso = 3;
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({respuesta: "Ya existe un Tipo Vinculacion con ese Nombre"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "No se encontro Tipo vinculacion que desea actualizar"});
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

export default ServiceUpdateTipoVinculacion;