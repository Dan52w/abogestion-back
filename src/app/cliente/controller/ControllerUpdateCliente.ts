import { Request, Response } from "express";
import ServicioUpdateCliente from "../service/ServicioUpdateCliente";
import Cliente from "../model/Cliente";

class ControllerUpdateCliente extends ServicioUpdateCliente {
    public callUpdateCliente(req: Request, res: Response) {
        const tipoCliente = req.body.tipocliente
        const objCliente = new Cliente(req.body.id, 0, req.body.nombre, req.body.nit_cc, 
            req.body.direccion, req.body.telefono, req.body.correoContacto, req.body.activo);
        ServicioUpdateCliente.updateCliente(objCliente, tipoCliente, res);
    }
}

const controllerUpdateCliente = new ControllerUpdateCliente;
export default controllerUpdateCliente;