import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_TIPODOCUMENTO } from "../repository/sql_tipodocumentos";

class ServiceAddTipoDocumento {
    protected static async addTipoDocumento(name: string, descripcion: string, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existe = await consulta.one(SQL_TIPODOCUMENTO.HOW_MANY, [name]);
            
                if(existe.cantidad == 0) {
                    caso = 2;
                    obj = await consulta.one(SQL_TIPODOCUMENTO.ADD, [name, descripcion]);
                }
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso){
                    case 1:
                        res.status(400).json({respuesta: "Ya existe el Tipo Documento"});
                        break;
                    default:
                        res.status(200).json(obj);
                        break;
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceAddTipoDocumento;