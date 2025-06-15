import { Request, Response } from "express";
import ServiceUpdatePersona from "../service/ServiceUpdatePersona";
import Persona from "../model/Persona";

class ControllerUpdatePersona extends ServiceUpdatePersona {
    public callUpdatePersona(req: Request, res: Response) {
        const nameCliente = req.body.nameCliente;
        const objPeronsa = new Persona(0, req.body.cedula, req.body.nombre, req.body.apellido, 
            req.body.fechaNacimiento, req.body.correo, req.body.telefono, req.body.direccion, req.body.activo, 0);
        ServiceUpdatePersona.updatePersona(objPeronsa, nameCliente, res);
    }
}

const controllerUpdatePersona = new ControllerUpdatePersona();
export default controllerUpdatePersona;