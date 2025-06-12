import { Response } from "express";
import Cliente from "../model/Cliente";
import pool from "../../../config/connection/dbConnction";
import { SQL_CLIENTE } from "../repository/sql_clientes";

class ServiceAddCliente {
    protected static async addCliente(objCliente: Cliente, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existeCliente = await consulta.one(SQL_CLIENTE.HOW_MANY, [objCliente.nit_cc]);
            
                if(existeCliente.cantidad == 0){
                    caso = 2;
                    obj = await consulta.one(SQL_CLIENTE.ADD, [objCliente.tipoCliente, objCliente.nombre, objCliente.nit_cc, 
                        objCliente.direccion, objCliente.telefono, objCliente.correoContacto, objCliente.activo]);
                    return {caso, obj};
                }
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({respuesta: "El Cliente ya Existe"});
                        break;
                    case 2:
                        res.status(200).json(obj);
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceAddCliente;