import { Request, Response } from "express";
import ServiceUpdateTipoCliente from "../service/ServiceUpdateTipoCliente";

class ControllerUpdateTipoCliente extends ServiceUpdateTipoCliente {
    public callUpdateTipoCliente(req: Request, res: Response) {
        const oldName = req.body.oldName;
        const newName = req.body.newName;
        ServiceUpdateTipoCliente.updateTipoCliente(oldName, newName, res);
    }
}

const controllerUpdateTipoCliente = new ControllerUpdateTipoCliente();
export default controllerUpdateTipoCliente;