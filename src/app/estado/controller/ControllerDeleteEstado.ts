import { Request, Response } from "express";
import ServiceDeleteEstado from "../service/ServiceDeleteEstado";

class ControllerDeleteEstado extends ServiceDeleteEstado {
    public callDeleteEstado(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceDeleteEstado.deleteEstado(id, res);
    }
}

const controllerDeleteEstado = new ControllerDeleteEstado();
export default controllerDeleteEstado;