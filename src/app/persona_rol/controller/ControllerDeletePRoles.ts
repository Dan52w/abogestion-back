import { Request, Response } from "express";
import ServiceDeletePRoles from "../service/ServiceDeletePRoles";
import PersonaRol from "../model/PersonaRol";

class ControllerDeletePRoles extends ServiceDeletePRoles {
    public callDeletePRoles(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceDeletePRoles.deletePRoles(id, res);
    }
}

const controllerDeletePRoles = new ControllerDeletePRoles();
export default controllerDeletePRoles;