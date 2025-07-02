import e, { Response } from "express";
import Etiqueta from "../model/Etiqueta";
import pool from "../../../config/connection/dbConnction";
import { SQL_ETIQUETA } from "../repository/sql_etiquetas";

class ServiceUpdateEtiqueta {
    protected static async updateEtiqueta(objEtiqueta: Etiqueta, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const tEtiqueta = await consulta.oneOrNone(SQL_ETIQUETA.FIND_TIPO_ETIQUETA_ID, [objEtiqueta.codTipoEtiqueta]);
            
                if(!tEtiqueta) {
                    return {caso, obj};
                }
            
                const existe = await consulta.one(SQL_ETIQUETA.HOW_MANY, [objEtiqueta.nombre, objEtiqueta.codTipoEtiqueta]);
            
                if(existe.cantidad != 0) {
                    caso = 2;
                    return {caso, obj};
                }
            
                obj = await consulta.one(SQL_ETIQUETA.UPDATE, [objEtiqueta.nombre, objEtiqueta.codTipoEtiqueta, 
                    objEtiqueta.codTipoEtiqueta]);
                caso = 3;
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(404).json({respuesta: "No se encontro el Tipo Etiqueta"});
                        break;
                    case 2:
                        res.status(400).json({respuesta: "Ya existe una Etiqueta con esos atributos"});
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

export default ServiceUpdateEtiqueta;