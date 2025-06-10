import { Request, Response } from "express";
import ServiceFindNameRol from "../service/ServiceFindNameRol";

class ControllerFindNameRol extends ServiceFindNameRol {
    public callFindName(req: Request, res: Response) {
        const name = req.params.name;
        ServiceFindNameRol.findName(name, res);
    }
}

const controllerFindNameRol = new ControllerFindNameRol();
export default controllerFindNameRol;