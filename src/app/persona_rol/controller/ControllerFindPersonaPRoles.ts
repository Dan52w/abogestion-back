import { Request, Response } from "express";
import ServiceFindPersonaPRoles from "../service/ServiceFindPersonaPRoles";

class ControllerFindPersonaPRoles extends ServiceFindPersonaPRoles{
    public callFindPersona(req: Request, res: Response) {
        const idPersona = Number(req.params.id);
        ServiceFindPersonaPRoles.findPersona(idPersona, res);
    }
}

const controllerFindPersonaPRoles = new ControllerFindPersonaPRoles();
export default controllerFindPersonaPRoles;