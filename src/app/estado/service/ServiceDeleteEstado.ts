import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_ESTADO } from "../repository/sql_estados";

class ServiceDeleteEstado {
    protected static async deleteEstado(id: number, res: Response): Promise<any> {
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const validarTablas = await consulta.one(SQL_ESTADO.HOW_MANY_CASO, [id]);
            
                if(validarTablas.cantidad != 0) {
                    return {caso, obj};
                }
            
                obj = await consulta.result(SQL_ESTADO.DELETE, [id]);
            
                if(obj.rowCount == 0){
                    caso = 2;
                } else {
                    caso = 3;
                }
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({respuesta: "No se puede borrar el Estado, esta referido en otra Tabla"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "No se encontro el Estado"});
                        break;
                    default:
                        res.status(200).json({respuesta: "Se elimino correctamente"});
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceDeleteEstado;