import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_ETIQUETA } from "../repository/sql_etiquetas";

class ServiceDeleteEtiqueta {
    protected static async deleteEtiqueta(id: number, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const validarTablas = await consulta.one(SQL_ETIQUETA.HOW_MANY_DOCETIQUE, [id]);
            
                if(validarTablas.cantidad != 0) {
                    return caso;
                }
            
                obj = await consulta.result(SQL_ETIQUETA.DELETE, [id]);
            
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
                        res.status(400).json({respuesta: "No se puede borrar el Etiqueta, esta referido en otra Tabla"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "No se encontro el Etiqueta"});
                        break;
                    default:
                        res.status(200).json({respuesta: "Se elimino correctamente"});
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceDeleteEtiqueta;