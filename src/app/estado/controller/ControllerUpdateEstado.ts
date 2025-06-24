import { Request, Response } from "express";
import ServiceUpdateEstado from "../service/ServiceUpdateEstado";

class ControllerUpdateEstado extends ServiceUpdateEstado {
    public callUpdateEstado(req: Request, res: Response) {
        const { oldName, newName } = req.body;
        ServiceUpdateEstado.updateEstado(oldName, newName, res);
    }
}

const controllerUpdateEstado = new ControllerUpdateEstado();
export default controllerUpdateEstado;