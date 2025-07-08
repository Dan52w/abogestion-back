import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_VINCULACION } from "../repository/sql_vinculaciones";

class ServiceFindAllVinculacion {
    protected static async findAll(codClienteConsultant: number, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso =1;
                const obj = await consulta.result(SQL_VINCULACION.FIND_ALL, [codClienteConsultant]);
            
                if(obj) {
                    caso = 2;
                }
            
                console.log(obj);
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(404).json({respuesta: "No se encontraron Casos"});
                        break;
                    default:
                        res.status(200).json(obj.rows);
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"})
            })
    }
}

export default ServiceFindAllVinculacion;