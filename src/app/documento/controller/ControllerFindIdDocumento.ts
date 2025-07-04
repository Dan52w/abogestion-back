import { Request, Response } from "express";
import ServiceFindIdDocumento from "../service/ServiceFindIdDocumento";

class ControllerFindIdDocumento extends ServiceFindIdDocumento {
    public callFindId(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceFindIdDocumento.findId(id, res);
    }
}

const controllerFindIdDocumento = new ControllerFindIdDocumento();
export default controllerFindIdDocumento;