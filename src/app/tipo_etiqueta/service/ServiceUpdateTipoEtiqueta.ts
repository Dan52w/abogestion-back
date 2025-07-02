import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_TIPOSETIQUETAS } from "../repository/sql_tiposetiquetas";

class ServiceUpdateTipoEtiqueta {
    protected static async updateTipoEtiqueta(oldName: string, newName: string, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existeNewName = await consulta.one(SQL_TIPOSETIQUETAS.HOW_MANY, [newName]);
            
                if(existeNewName.cantidad != 0){
                    return {caso, obj};
                }
            
                const idOld = await consulta.oneOrNone(SQL_TIPOSETIQUETAS.FIND_NAME, [oldName]);
            
                if(idOld){
                    caso = 3;
                    obj = await consulta.one(SQL_TIPOSETIQUETAS.UPDATE, [newName, idOld.id])
                } else {
                    caso = 2;
                }
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({respuesta: "Ya existe un Tipo de Etiqueta con ese nombre"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "No se encontro el Tipo de Etiqueta que desea actualizar"});
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

export default ServiceUpdateTipoEtiqueta;