import { Request, Response } from "express";
import ServiceFindAllCliente from "../service/ServiceFindAllCliente";

class ControllerFindAllCliente extends ServiceFindAllCliente {
    public callFindAllCliente(req: Request, res: Response) {
        ServiceFindAllCliente.findAllCliente(res);
    }
}

const controllerFindAllCliente = new ControllerFindAllCliente();
export default controllerFindAllCliente;