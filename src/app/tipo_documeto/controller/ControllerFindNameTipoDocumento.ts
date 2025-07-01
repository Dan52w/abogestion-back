import { Request, Response } from "express";
import ServiceFindNameTipoDocumento from "../service/ServiceFindNameTipoDocumento";

class ControllerFindNameTipoDocumento extends ServiceFindNameTipoDocumento {
    public callFindName(req: Request, res: Response) {
        const name = req.params.name;
        ServiceFindNameTipoDocumento.findName(name, res);
    }
}

const controllerFindNameTipoDocumento = new ControllerFindNameTipoDocumento();
export default controllerFindNameTipoDocumento;