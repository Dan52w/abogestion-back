import { Request, Response } from "express";
import ServiceFindIdTipoEtiqueta from "../service/ServiceFindIdTipoEtiqueta";

class ControllerFindIdTipoEtiqueta extends ServiceFindIdTipoEtiqueta{
    public callFindId(req: Request, res: Response) {
        const id = Number(req.body.id);
        ServiceFindIdTipoEtiqueta.findId(id, res);
    }
}

const controllerFindIdTipoEtiqueta = new ControllerFindIdTipoEtiqueta();
export default controllerFindIdTipoEtiqueta;