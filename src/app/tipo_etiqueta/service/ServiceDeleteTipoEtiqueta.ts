import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_TIPOSETIQUETAS } from "../repository/sql_tiposetiquetas";

class ServiceDeleteTipoEtiqueta {
    protected static async deleteTipoEtiqueta(id: number, res: Response): Promise<any>{
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const validarTabla = await consulta.one(SQL_TIPOSETIQUETAS.HOW_MANY_ETIQUETA, [id]);
            
                if(validarTabla.cantidad != 0) {
                    return {caso, obj};
                }
            
                obj = await consulta.result(SQL_TIPOSETIQUETAS.DELETE, [id]);
            
                if(obj.rowCount == 0) {
                    caso = 2;
                } else {
                    caso = 3;
                }
            
                return caso;
            })
            .then((caso) => {
                switch (caso) {
                    case 1:
                        res.status(400).json({respuesta: "No se puede eliminar el Tipo Etiqueta, esta referenciado en otra tabla"});
                        break;
                    case 2:
                        res.status(404).json({respuesta: "No se encontro el Tipo Etiqueta"});
                        break;
                    default:
                        res.status(200).json({respuesta: "Eliminado correctamente"});
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({respuesta: "Error en el SQL"});
            })
    }
}

export default ServiceDeleteTipoEtiqueta;