import { Response } from "express";
import Cliente from "../model/Cliente";
import pool from "../../../config/connection/dbConnction";
import { SQL_CLIENTE } from "../repository/sql_clientes";

class ServicioUpdateCliente {
    protected static async updateCliente(objCliente: Cliente, tipoCliente: string, res: Response): Promise<any> {
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existeCliente = await consulta.oneOrNone(SQL_CLIENTE.FIND_ID, [objCliente.id]);
            
                if (!existeCliente) {
                    return {caso, obj};
                }
            
                const idTCliente = await consulta.oneOrNone(SQL_CLIENTE.FIND_NAME_TCLIENTE, [tipoCliente]);
            
                if(!idTCliente) {
                    caso = 2;
                    return {caso, obj};
                }
            
                const parametros = [idTCliente.id, objCliente.nombre, objCliente.nit_cc, objCliente.direccion, 
                    objCliente.telefono, objCliente.correoContacto, objCliente.activo, existeCliente.id];
            
                caso = 3
                obj = await consulta.one(SQL_CLIENTE.UPDATE, parametros);
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(404).json({respuesta: "Cliente no encontrado con ese NIT"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "El Tipo Cliente no encontrado"});
                        break;
                    default:
                        res.status(200).json({obj});
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({ respuesta: "Error en el SQL" });
            });
    }
}

export default ServicioUpdateCliente;