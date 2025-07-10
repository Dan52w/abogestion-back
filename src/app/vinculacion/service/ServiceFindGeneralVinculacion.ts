import { Response } from "express";
import pool from "../../../config/connection/dbConnction"
import { SQL_VINCULACION } from "../repository/sql_vinculaciones";

class ServiceFindGeneralVinculaciones {
    protected static async findGeneral(firma: number, titulo: string | null, estado: string | null, subtipo: string | null,
        fechaInicio: string | null, fechaFin: string | null, res: Response): Promise<any> {
        await pool
            .task(async (consulta) => {
                const datos = await consulta.result(SQL_VINCULACION.FIND_BY_FILTERS, [firma, titulo || null,
                    estado || null,  subtipo || null, fechaInicio || null, fechaFin || null]);
                return datos;
            })
            .then((misDatos) => {
                res.status(200).json(misDatos.rows);
            })
            .catch((error) => {
                console.error(error);
                res.status(400).json({ respuesta: "Error en el SQL" });
            });
    }
}

export default ServiceFindGeneralVinculaciones;