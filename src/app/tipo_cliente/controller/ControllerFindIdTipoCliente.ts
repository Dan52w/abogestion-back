import { Request, Response } from "express";
import ServiceFindIdTipoCliente from "../service/ServiceFindIdTipoCliente";

class ControllerFindIdTipoCliente extends ServiceFindIdTipoCliente{
    public callFindId(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceFindIdTipoCliente.findId(id, res);
    }
}

const controllerFindIdTipoCliente = new ControllerFindIdTipoCliente();
export default controllerFindIdTipoCliente;