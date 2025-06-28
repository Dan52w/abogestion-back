import { Request, Response } from "express";
import ServiceFindAllTipoDocumento from "../service/ServiceFindAllTipoDocumento";

class ControllerFindAllTipoDocumento extends ServiceFindAllTipoDocumento{
    public callFindAll(req: Request, res: Response) {
        ServiceFindAllTipoDocumento.findAll(res);
    }
}

const controllerFindAllTipoDocumento = new ControllerFindAllTipoDocumento();
export default controllerFindAllTipoDocumento;