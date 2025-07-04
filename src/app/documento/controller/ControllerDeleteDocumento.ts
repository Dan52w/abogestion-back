import { Request, Response } from "express";
import ServiceDeleteDocumento from "../service/ServiceDeleteDocumento";

class ControllerDeleteDocumento extends ServiceDeleteDocumento {
    public callDeleteDocumento(req: Request, res: Response) {
        const id = Number(req.params.id);
        ServiceDeleteDocumento.deleteDocumento(id, res);
    }
}

const controllerDeleteDocumento = new ControllerDeleteDocumento();
export default controllerDeleteDocumento;