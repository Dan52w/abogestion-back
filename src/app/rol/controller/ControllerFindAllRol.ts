import { Request, Response } from "express";
import ServiceFindAllRol from "../service/ServiceFindAllRol";

class ControllerFindAllRol extends ServiceFindAllRol {
    public callFindAll(req: Request, res: Response) {
        ServiceFindAllRol.findAll(res);
    }
}

const controllerFindAllRol = new ControllerFindAllRol();
export default controllerFindAllRol;