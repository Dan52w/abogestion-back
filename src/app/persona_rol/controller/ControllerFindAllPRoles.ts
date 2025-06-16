import { Request, Response } from "express";
import ServiceFindAllPRoles from "../service/ServiceFindAllPRoles";

class ControllerFindAllPRoles extends ServiceFindAllPRoles {
    public callFindAll(req: Request, res: Response) {
        ServiceFindAllPRoles.findAll(res);
    }
}

const controllerFindAllPRoles = new ControllerFindAllPRoles;
export default controllerFindAllPRoles;