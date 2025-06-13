import { Request, Response } from "express";
import ServiceFindNitCliente from "../service/ServiceFindNitCliente";

class ControllerFindNitCliente extends ServiceFindNitCliente {
    public callFindNit(req: Request, res: Response) {
        const nit_cc = req.params.nit_cc;
        ServiceFindNitCliente.findNit(nit_cc, res);
    }
}

const controllerFindNitCliente = new ControllerFindNitCliente();
export default controllerFindNitCliente;