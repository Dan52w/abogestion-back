import { json, Response } from "express";
import Vinculacion from "../model/Vinculacion";
import pool from "../../../config/connection/dbConnction";
import { SQL_VINCULACION } from "../repository/sql_vinculaciones";

class ServiceAddVinculacion {
    protected static async addVinculacion(objVinculacion: Vinculacion, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existePersona = await consulta.one(SQL_VINCULACION.HOW_MANY_PERSONA, [objVinculacion.codPersona]);
            
                if(existePersona.cantidad == 0) {
                    return {caso, obj};
                }
            
                const existeCaso = await consulta.one(SQL_VINCULACION.HOW_MANY_CASO, [objVinculacion.codCaso]);
            
                if(existeCaso.cantidad == 0) {
                    caso = 2;
                    return {caso, obj};
                }
            
                const existeTVin = await consulta.one(SQL_VINCULACION.HOW_MANY_TIPVIN, [objVinculacion.codTipoVinculacion]);
            
                if(existeTVin.cantidad == 0) {
                    caso = 3;
                    return {caso, obj};
                }
            
                const existeVin = await consulta.one(SQL_VINCULACION.HOW_MANY, [objVinculacion.codPersona, objVinculacion.codCaso,
                    objVinculacion.codTipoVinculacion]);
            
                if(objVinculacion.codCaso == 1){
                    caso = 5;
                    return {caso, obj}
                }
                
                if(existeVin.cantidad == 0) {
                    obj = await consulta.one(SQL_VINCULACION.ADD, [objVinculacion.codPersona, objVinculacion.codCaso,
                    objVinculacion.codTipoVinculacion]);
                    caso = 6;
                } else {
                    caso = 4;
                }
            
                return {caso, obj}
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(404).json({respuesta: "No se encontro la Persona"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "No se encontro el Caso"});
                        break;
                    case 3:
                        res.status(404).json({respuesta: "No se encontro el Tipo Vinculacion"});
                        break;
                    case 4:
                        res.status(400).json({respuesta: "Ya existe una vinculacion con esos atributos"});
                        break;
                    case 5:
                        res.status(400).json({respuesta: "No se puede vincular a este caso especifico"})
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

export default ServiceAddVinculacion;