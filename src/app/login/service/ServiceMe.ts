import { Response } from "express";
import pool from "../../../config/connection/dbConnction";
import { SQL_PERSONA } from "../../persona/repository/sql_personas";

class ServiceMe {
    protected static async me(id: number, res: Response): Promise<any> {
        await pool
            .result(SQL_PERSONA.FIND_ID, [id])
            .then((misdatos) => {
                if (!misdatos.rows.length) {
                    return res.status(404).json({ message: "Usuario no encontrado" });
                }

                res.json(misdatos.rows[0]);
            })
            .catch((error) => {
                console.error(error);
                return res.status(400).json({ respuesta: "Error en el SQL" });
            });
    }
}

export default ServiceMe;