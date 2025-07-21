import { Response } from "express";
import HistorialCambio from "../model/HistorialCambio";
import pool from "../../../config/connection/dbConnction";
import { SQL_HISTORIAL_CAMBIOS } from "../repository/sql_historialcambios";

class ServiceAddHistCambio {
    protected static async addHistCambio(objHistCambio: HistorialCambio, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existCaso = await consulta.one(SQL_HISTORIAL_CAMBIOS.HOW_MANY_CASO, [objHistCambio.codCaso]);
            
                if(existCaso.cantidad == 0 || objHistCambio.codCaso == 1) {
                    return {caso, obj};
                }
            
                const existePersona = await consulta.one(SQL_HISTORIAL_CAMBIOS.HOW_MANY_PERSONA, [objHistCambio.codPersona]);
            
                if(existePersona.cantidad == 0) {
                    caso = 2;
                    return {caso, obj};
                }
            
                obj = await consulta.one(SQL_HISTORIAL_CAMBIOS.ADD, [objHistCambio.codCaso,
                    objHistCambio.codPersona,
                    objHistCambio.fechaCambio,
                    objHistCambio.observacion]);
                caso = 3;
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(404).json({respuesta: "El caso no existe"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "La persona no existe"});
                        break;
                    default:
                        res.status(201).json(obj);
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceAddHistCambio;