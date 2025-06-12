import { Request, Response } from "express";
import ServiceDeleteTipoCliente from "../service/ServiceDeleteTipoCliente";

class ControllerDeleteTipoCliente extends ServiceDeleteTipoCliente {
    public callDeleteTipoCliente(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceDeleteTipoCliente.deleteTipoCliente(id, res);
    }
}

const controllerDeleteTipoCliente = new ControllerDeleteTipoCliente();
export default controllerDeleteTipoCliente;