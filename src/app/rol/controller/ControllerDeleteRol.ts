import { Request, Response } from "express";
import ServicioDeleteRol from "../service/ServicioDeleteRol";

class ControllerDeleteRol extends ServicioDeleteRol {
    public callDeleteRol(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServicioDeleteRol.deleteRol(id, res);
    }
}

const controllerDeleteRol = new ControllerDeleteRol();
export default controllerDeleteRol;