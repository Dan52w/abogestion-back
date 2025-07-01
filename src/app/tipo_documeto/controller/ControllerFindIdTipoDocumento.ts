import { Request, Response } from "express";
import ServiceFindIdTipoDocumento from "../service/ServiceFindIdTpoDocumento";

class ControllerFindIdTipoDocumento extends ServiceFindIdTipoDocumento{
    public callFindId(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceFindIdTipoDocumento.findId(id, res);
    }
}

const controllerFindIdTipoDocumento = new ControllerFindIdTipoDocumento();
export default controllerFindIdTipoDocumento;