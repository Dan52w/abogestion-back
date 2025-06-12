import { Request, Response } from "express";
import ServiceFindIdCliente from "../service/ServiceFindIdCliente";

class ControllerFindIdCliente extends ServiceFindIdCliente {
    public callFindIdCliente(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceFindIdCliente.findId(id, res);
    }
}

const controllerFindIdCliente = new ControllerFindIdCliente();
export default controllerFindIdCliente;