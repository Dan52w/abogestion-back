import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_SUBTIPOCASO } from "../repository/sql_subtipocasos";

class ServiceDeleteSubTipoCaso {
    protected static async deleteSubTipoCaso(id: Number, res: Response): Promise<any> {
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const validarTablas = await consulta.one(SQL_SUBTIPOCASO.HOW_MANY_CASO, [id]);
            
                if(validarTablas.cantidad != 0) {
                    return caso;
                }
            
                obj = await consulta.result(SQL_SUBTIPOCASO.DELETE, [id]);
            
                if(obj.rowCount == 0){
                    caso = 2;
                } else {
                    caso = 3;
                }
            
                return caso;
            })
            .then((caso) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({respuesta: "No se puede borrar el Sub-Tipo Caso, esta referido en otra Tabla"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "No se encontro el Sub-Tipo Caso"});
                        break;
                    default:
                        res.status(200).json({respuesta: "Se elimino correctamente"});
                }
            })
            .catch((error) => {
                console.error(error);
                res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceDeleteSubTipoCaso;