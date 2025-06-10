import { Request, Response } from "express";
import ServiceFindAllTipoCliente from "../service/ServiceFindAllTipoCliente";

class ControllerFindAllTipoCliente extends ServiceFindAllTipoCliente{
    public callFindAll(req: Request, res: Response) {
        ServiceFindAllTipoCliente.findAll(res);
    }
}

const controllerFindAllTipoCliente = new ControllerFindAllTipoCliente();
export default controllerFindAllTipoCliente;