import { Request, Response } from "express";
import ServiceAddPersona from "../service/ServiceAddPeronsa";
import Persona from "../model/Persona";

class ControllerAddPersona extends ServiceAddPersona {
    public callAddPersona(req: Request, res: Response) {
        const nameCliente = req.body.nameCliente;
        const objPersona = new Persona(0, req.body.cedula, req.body.nombre, req.body.apellido, req.body.codRol, 
            req.body.fechaNacimiento, req.body.correo, req.body.telefono, req.body.direccion, req.body.activo, 0);
        ServiceAddPersona.addPersona(objPersona, nameCliente, res);
    }
}

const controllerAddPersona = new ControllerAddPersona();
export default controllerAddPersona;