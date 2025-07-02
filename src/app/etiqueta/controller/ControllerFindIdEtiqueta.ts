import { Request, Response } from "express";
import ServiceFindIdEtiqueta from "../service/ServiceFindIdEtiqueta";

class ControllerFindIdEtiqueta extends ServiceFindIdEtiqueta {
    public callFindId(req: Request, res: Response) {
        const id = Number(req.body.id);
        ServiceFindIdEtiqueta.findId(id, res);
    }
}

const controllerFindIdEtiqueta = new ControllerFindIdEtiqueta();
export default controllerFindIdEtiqueta;