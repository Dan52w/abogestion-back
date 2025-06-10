import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_ROL } from "../repository/sql_roles";

class ServicioDeleteRol {
    protected static async deleteRol(id: number, res: Response): Promise<any> {
        await pool
            .task(async (consulta) => {
                let caso = 1;
            
                const validarTablas = await consulta.oneOrNone(SQL_ROL.HOW_MANY_PERSONASROLES, [id]);
            
                if (validarTablas == 0) {
                    caso = 2;
                    await consulta.result(SQL_ROL.DELETE, [id]);
                    return caso;
                } else {
                    caso = 3;
                }
            
                return caso;
            })
            .then((caso) => {
                switch (caso) {
                    case 1:
                        res.status(404).json({respuesta: "No se encontro el Rol"});
                        break;
                    case 2:
                        res.status(200).json({respuesta: "Rol Eliminado correctamente"});
                        break;
                    case 3:
                        res.status(400).json({respuesta: "No se puede eliminar el Rol, esta referido en otra tabla"});
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServicioDeleteRol;