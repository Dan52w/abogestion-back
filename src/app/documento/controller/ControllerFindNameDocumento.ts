import { Request, Response } from "express";
import ServiceFindNameDocumento from "../service/ServiceFindNameDocumento";

class ControllerFindNameDocumento extends ServiceFindNameDocumento {
    public callFindName(req: Request, res: Response) {
        const name = req.params.name;
        ServiceFindNameDocumento.findName(name, res);
    }
}

const controllerFindNameDocumento = new ControllerFindNameDocumento();
export default controllerFindNameDocumento;