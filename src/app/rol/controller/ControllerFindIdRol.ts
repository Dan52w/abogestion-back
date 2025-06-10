import { Request, Response } from "express";
import ServiceFindIdRol from "../service/ServiceFindIdRol";

class ControllerFindIdRol extends ServiceFindIdRol {
    public callFindId(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceFindIdRol.findId(id, res);
    }
}

const controllerFindIdRol = new ControllerFindIdRol();
export default controllerFindIdRol;