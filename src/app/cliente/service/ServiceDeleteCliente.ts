import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_CLIENTE } from "../repository/sql_clientes";

class ServiceDeleteCliente {
    protected static async deleteCliente(id: number, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
            
                const existe = await consulta.one(SQL_CLIENTE.HOW_MANY_ID, [id]);
            
                if(existe.cantidad == 0) {
                    return caso;
                }
            
                const codClientePersona = await consulta.one(SQL_CLIENTE.HOW_MANY_CLIENTEPER, [id]);
                const codClienteSubcripciones = await consulta.one(SQL_CLIENTE.HOW_MANY_CLIENTESUB, [id]);
            
                if(codClienteSubcripciones.cantidad == 0 && codClientePersona.cantidad == 0) {
                    caso = 2;
                    await consulta.result(SQL_CLIENTE.DELETE, [id]);
                    return caso;
                } else {
                    caso = 3;
                }
            
                return caso;
            })
            .then((caso) => {
                switch (caso) {
                    case 1:
                        res.status(404).json({respuesta: "No se encontro el cliente"});
                        break;
                    case 2:
                        res.status(200).json({respuesta: "Cliente eliminado correctamente"});
                        break;
                    case 3:
                        res.status(400).json({respuesta: "No se pueda eliminar el Cliente, esta referido en otra tabla"});
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceDeleteCliente