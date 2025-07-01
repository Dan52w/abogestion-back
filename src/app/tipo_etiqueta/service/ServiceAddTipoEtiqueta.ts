import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_TIPOSETIQUETAS } from "../repository/sql_tiposetiquetas";

class ServiceAddTipoEtiqueta {
    protected static async AddTipoEtiqueta(name: string, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const existe = await consulta.one(SQL_TIPOSETIQUETAS.HOW_MANY, [name]);
            
                if(existe.cantidad == 0) {
                    obj = await consulta.one(SQL_TIPOSETIQUETAS.ADD, [name]);
                    caso = 2;
                }
            
                return {caso, obj};
            })
            .then(({caso, obj}) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({respuesta: "Ya existe el Tipo Etiqueta"});
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

export default ServiceAddTipoEtiqueta;