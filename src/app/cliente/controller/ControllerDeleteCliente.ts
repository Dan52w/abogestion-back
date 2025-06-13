import { Request, Response } from "express";
import ServiceDeleteCliente from "../service/ServiceDeleteCliente";

class ControllerDeleteCliente extends ServiceDeleteCliente {
    public callDeleteCliente(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceDeleteCliente.deleteCliente(id, res);
    }
}

const controllerDeleteCliente = new ControllerDeleteCliente();
export default controllerDeleteCliente;