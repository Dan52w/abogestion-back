import { Request, Response } from "express";
import ServiceUpdateRol from "../service/ServiceUpdateRol";

class ControllerUpdateRol extends ServiceUpdateRol {
    public callUpdateRol(req: Request, res: Response) {
        const oldName = req.body.oldName;
        const newName = req.body.newName;
        ServiceUpdateRol.updateRol(oldName, newName, res);
    }
}

const controllerUpdateRol = new ControllerUpdateRol();
export default controllerUpdateRol;