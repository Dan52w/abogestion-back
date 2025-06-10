import { Request, Response } from "express";
import ServiceAddTipoCliente from "../service/ServiceAddTipoCliente";

class ControllerAddTipoCliente extends ServiceAddTipoCliente {
    public callAddTipoCliente(req: Request, res: Response) {
        const name = req.body.name;
        ServiceAddTipoCliente.addTipoCliente(name, res);
    }
}

const controllerAddTipoCliente = new ControllerAddTipoCliente();
export default controllerAddTipoCliente;