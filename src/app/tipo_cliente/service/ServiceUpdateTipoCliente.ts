import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_TIPOSCLIENTES } from "../repository/sql_tiposclientes";

class ServiceUpdateTipoCliente {
    protected static async updateTipoCliente(oldName: string, newName: string, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existeNewName = await consulta.one(SQL_TIPOSCLIENTES.HOW_MANY, [newName]);
            
                if(existeNewName.cantidad != 0) {
                    return {caso, obj};
                }
            
                const oldTCliente = await consulta.oneOrNone(SQL_TIPOSCLIENTES.FIND_NAME, [oldName]);
            
                if(!oldTCliente) {
                    caso = 2;
                    return {caso, obj};
                }
            
                caso = 3;
                obj = await consulta.one(SQL_TIPOSCLIENTES.UPDATE, [newName, oldTCliente.id]);
                return {caso, obj}
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({respuesta: "Ya existe un Tipo Cliente con Es Nombre"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "No se encontro el Tipo Cliente que desea Actualizar"});
                        break;
                    default:
                        res.status(200).json(obj);
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({repuesta: "Error en el SQL"});
            })
    }
}

export default ServiceUpdateTipoCliente;