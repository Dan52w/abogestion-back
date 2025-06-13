import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_TIPOSCLIENTES } from "../repository/sql_tiposclientes";

class ServiceDeleteTipoCliente {
    protected static async deleteTipoCliente(id: number, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
            
                const existe = await consulta.one(SQL_TIPOSCLIENTES.HOW_MANY_ID, [id]);
            
                if(existe.cantidad == 0) {
                    return caso;
                }
            
                const validarTablas = await consulta.oneOrNone(SQL_TIPOSCLIENTES.HOW_MANY_CLIENTES, [id]);
            
                if(validarTablas.cantidad == 0) {
                    caso = 2;
                    await consulta.result(SQL_TIPOSCLIENTES.DELETE, [id]);
                    return caso;
                } else {
                    caso = 3;
                }
            
                return caso;
            })
            .then((caso) => {
                switch (caso) {
                    case 1:
                        res.status(404).json({respuesta: "No se encontro el Tipo Cliente"});
                        break;
                    case 2:
                        res.status(200).json({respuesta: "Tipo Cliente eliminado correctamente"});
                        break;
                    default:
                        res.status(400).json({respuesta: "No se puede eliminar el Tipo Cliente, esta referido en otra tabla"});
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceDeleteTipoCliente;