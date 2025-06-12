import { Request, Response } from "express";
import ServiceFindNameTipoCliente from "../service/ServiceFindNameTipoCliente";

class ControllerFindNameTipoCliente extends ServiceFindNameTipoCliente {
    public callFindName(req: Request, res: Response) {
        const name = req.params.name;
        ServiceFindNameTipoCliente.findName(name, res);
    }
}

const controllerFindNameTipoCliente = new ControllerFindNameTipoCliente();
export default controllerFindNameTipoCliente;