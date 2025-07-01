import { Request, Response } from "express";
import ServiceFindAllTipoEtiqueta from "../service/ServiceFindAllTipoEtiqueta";

class ControllerFindAllTipoEtiqueta extends ServiceFindAllTipoEtiqueta {
    public callFindAll(req: Request, res: Response) {
        ServiceFindAllTipoEtiqueta.findAll(res);
    }
}

const controllerFindAllTipoEtiqueta = new ControllerFindAllTipoEtiqueta();
export default controllerFindAllTipoEtiqueta;