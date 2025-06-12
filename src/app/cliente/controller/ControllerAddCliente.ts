import { Request, Response } from "express";
import ServiceAddCliente from "../service/ServiceAddCliente";
import Cliente from "../model/Cliente";

class ControllerAddCliente extends ServiceAddCliente {
    public callAddCliente(req: Request, res: Response) {
        const objCliente = new Cliente(0, req.body.tipoCliente, req.body.nombre, req.body.nit_cc, 
            req.body.direccion, req.body.telefono, req.body.correoContacto, req.body.activo);
    
        ServiceAddCliente.addCliente(objCliente, res);
    }
}

const controllerAddCliente = new ControllerAddCliente();
export default controllerAddCliente;