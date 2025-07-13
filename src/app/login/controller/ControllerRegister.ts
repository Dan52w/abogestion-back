import { Request, Response } from "express";
import ServiceRegister from "../service/ServiceRegister";
import Persona from "../../persona/model/Persona";

class ControllerRegister extends ServiceRegister {
    public callRegister(req: Request, res: Response) {
        const nameCliente = req.body.nameCliente;
        const objPersona = new Persona(0, req.body.cedula, req.body.nombre, req.body.apellido, req.body.codRol, 
            req.body.fechaNacimiento, req.body.correo, req.body.telefono, req.body.direccion, req.body.activo, 0);

        const password = req.body.password;

        ServiceRegister.register(objPersona, nameCliente, password, res);
    }
}

const controllerRegister = new ControllerRegister();
export default controllerRegister;