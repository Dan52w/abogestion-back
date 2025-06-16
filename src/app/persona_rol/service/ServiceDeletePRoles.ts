import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_PERSONAS_ROLES } from "../repository/sql_personasroles";

class ServiceDeletePRoles {
    protected static async deletePRoles(id: number, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
            
                const existe = await consulta.oneOrNone(SQL_PERSONAS_ROLES.FIND_ID, [id]);
            
                if(existe) {
                    caso = 2;
                    await consulta.result(SQL_PERSONAS_ROLES.DELETE, [id]);
                }
            
                return caso;
            })
            .then((caso) => {
                switch(caso) {
                    case 1:
                        res.status(404).json({respuesta: "No se encontro la Vinculacion que desea eliminar"});
                        break;
                    default:
                        res.status(200).json({respuesta: "Se elimino crrectamente"});
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceDeletePRoles;