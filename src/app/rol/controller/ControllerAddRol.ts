import { Request, Response } from "express";
import ServiceAddRol from "../service/ServiceAddRol";

class ControllerAddRol extends ServiceAddRol {
    public callAddRol(req: Request, res: Response) {
        const name = req.body.name;
        ServiceAddRol.add(name, res);
    }
}

const controllerAddRol = new ControllerAddRol();
export default controllerAddRol;