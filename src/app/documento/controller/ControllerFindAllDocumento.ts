import { Request, Response } from "express";
import ServiceFindAllDocumento from "../service/ServiceFindAllDocumento";

class ControllerFindAllDocumento extends ServiceFindAllDocumento {
    public callFindAll(req: Request, res: Response) {
        ServiceFindAllDocumento.findAll(res);
    }
}

const controllerFindAllDocumento = new ControllerFindAllDocumento();
export default controllerFindAllDocumento;