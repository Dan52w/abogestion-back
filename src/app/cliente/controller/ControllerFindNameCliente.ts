import { Request, Response } from "express";
import ServiceFindNameCliente from "../service/ServiceFindNameCliente";

class ControllerFindNameCliente extends ServiceFindNameCliente {
    public callFindName(req: Request, res: Response) {
        const name = req.params.name;
        ServiceFindNameCliente.findName(name, res);
    }
}

const controllerFindNameCliente = new ControllerFindNameCliente();
export default controllerFindNameCliente;