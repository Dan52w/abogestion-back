import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_DOCUMENTOS } from "../repository/sql_documentos";

class ServiceDownloadDocumento {
    protected static async downloadDocumento(id: number, res: Response): Promise<any> {
        await pool
            .task(async (consulta) => {
                let caso = 1;
                let obj: any;
            
                const documento = await consulta.oneOrNone(SQL_DOCUMENTOS.FIND_URL, [id]);
            
                if (!documento) {
                    caso = 2;
                    return { caso, obj };
                }
            
                obj = documento;
                return { caso, obj };
            })
            .then(({ caso, obj }) => {
                switch (caso) {
                    case 1:
                        return res.download(obj.url);
                    case 2:
                        return res.status(404).json({ respuesta: "No se encontró el documento" });
                }
            })
            .catch((error) => {
                console.error(error);
                return res.status(500).json({ respuesta: "Error en el servidor al buscar el documento" });
            });
    }
}

export default ServiceDownloadDocumento;
