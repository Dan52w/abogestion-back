import { response, Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_CASOS } from "../repository/sql_casos";

class ServiceDeleteCaso {
    protected static async deleteCaso(id: number, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existe = await consulta.oneOrNone(SQL_CASOS.FIND_ID, [id]);
            
                if(!existe) {
                    return caso;
                }
            
                obj = await consulta.one(SQL_CASOS.DELETE, [id]);
            
                if(obj.rowCount) {
                    caso = 2;
                } else {
                    caso = 3;
                }
            
                return caso;
            })
            .then((caso) => {
                switch(caso) {
                    case 1:
                        res.status(400).json({respuesta: "No se puede borrar el caso, porque esta referido en otra tabla"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "No se encontro el caso"});
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

export default ServiceDeleteCaso;