import { Request, Response } from "express";
import ServiceAddPRoles from "../service/ServiceAddPRoles";
import PersonaRol from "../model/PersonaRol";

class ControllerAddPRoles extends ServiceAddPRoles {
    public callAddPRoles(req: Request, res: Response) {
        const objPersonaRol = new PersonaRol(0, req.body.codRol, req.body.codPersona);
        ServiceAddPRoles.addPRoles(objPersonaRol, res)
    }
}

const controllerAddPRoles = new ControllerAddPRoles();
export default controllerAddPRoles;